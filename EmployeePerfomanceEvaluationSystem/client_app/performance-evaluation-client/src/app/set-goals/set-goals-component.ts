import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { SetGoalsService } from '../shared/services/set-goals/set-goals-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { Goal } from '../shared/models/goals/goal';
import { Constant } from '../shared/constant/constants';
import { EmployeeIterationGoalRequestModel } from '../shared/models/set-goals/employee-iteration-goal-request-model';
import { UpdateEmployeeIterationState } from '../shared/models/set-goals/update-iteration-request-model';
import { UpdateIterationRequestModel } from '../shared/models/iteration/update-iteration-request-model';
import { EmployeeIerationGoal } from '../shared/models/set-goals/employee-iteration-goal';

@Component({
    templateUrl: './set-goals-component.html',
    styleUrls: ['./set-goals-component.css']
})
export class SetGoalsComponent implements OnInit {

    iterationId: number;
    employeeId: number;
    employeeIterationStateId: number = Constant.ITERATION_STATE.NOT_STARTED;
    loading: boolean;
    setGoalFormGroup: FormGroup;
    itemsPerPage: number = 4;
    searchTerm: string;
    modalRef: BsModalRef;

    constructor(private router: Router,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService,
                private iterationService: IterationService,
                private setGoalsService: SetGoalsService,
                private route: ActivatedRoute,
                private setGoalsFormBuilder: FormBuilder) { }

    ngOnInit() {

        this.initializeSetGoalsFormGroup();

        this.route.params.subscribe(params => {
            this.iterationId = params['iteration'] * 1;
            this.employeeId = params['user'] * 1;
            this.loadSetGoalsComponentData();
        });

    }

    private initializeSetGoalsFormGroup() {
        this.setGoalFormGroup = this.setGoalsFormBuilder.group({
            iteration: [null],
            user: [null],
            goals: this.setGoalsFormBuilder.array([]),
            goalsToDisplay: this.setGoalsFormBuilder.array([]),
            searchTerm: [''],
            currentPage: [1],
            goalFormGroup: this.setGoalsFormBuilder.group({
                goalId: [''],
                goalTitle: ['', [Validators.required]],
                goalDescription: ['', [Validators.required, Validators.maxLength(300)]],
                weightage:['', [Validators.required]]
            }),
            employee_goals: this.setGoalsFormBuilder.array([])
            //employeeGoalsFormGroup: this.setGoalsFormBuilder.group({
            //    employee_goals: this.setGoalsFormBuilder.array([])
            //})
        })
    }

    private loadSetGoalsComponentData() {


        this.loading = true;
        this.spinnerService.updateMessage('Loading data. Please wait.....');
        this.spinnerService.busy();
        this.iterationService.setGoalScreenData(this.employeeId, this.iterationId)
            .subscribe((responses: Array<ApiResponse>) => {

                let goals: Array<Goal> = new Array<Goal>();
                if (responses[2].data != null) {
                   goals = Goal.FormGoalModelArray(responses[2]);
                }

                this.setGoalFormGroup.controls['goals'] = this.setGoalsFormBuilder.array(
                                                            goals.map(i => this.setGoalsFormBuilder.group(i)));

                this.setGoalFormGroup.controls['goalsToDisplay'] = this.setGoalsFormBuilder.array(
                                                            goals.slice().map(i => this.setGoalsFormBuilder.group(i)));

               
                this.employeeIterationStateId = responses[3].data;

                let employee_goals: Array<EmployeeIerationGoal> = new Array<EmployeeIerationGoal>();
                if (responses[4].data != null) {

                    employee_goals = EmployeeIerationGoal.FormEmployeeIterationGoalModelArray(responses[4]);

                    this.setGoalFormGroup.controls['employee_goals'] = this.setGoalsFormBuilder.array(
                        employee_goals.slice().map(i => this.setGoalsFormBuilder.group(i)));
                }

                this.setGoalFormGroup.patchValue({

                    user: responses[0].data,
                    iteration: responses[1].data
                });

                console.log(this.setGoalFormGroup.value);

                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching loadSetGoalsComponentData');
           });

    }

    getIterationStatus(status: number) {

        if (status == IterationStatus.NOTACTIVE)
            return Constant.NOTACTIVE;

        if (status == IterationStatus.ACTIVE)
            return Constant.ACTIVE_ITERATION;

        if (status == IterationStatus.DELETED)
            return Constant.DELETED;

        if (status == IterationStatus.LOCKED)
            return Constant.LOCKED;
    }

    pageChanged(event: any) {
        this.setGoalFormGroup.patchValue({

            currentPage: event.page
        });
    }

    searchGoals() {

        let searchTerm = this.setGoalFormGroup.get('searchTerm').value;
        if (searchTerm != '' && searchTerm != null && searchTerm != undefined) {

            let goalsToDisplay = this.setGoalFormGroup.get('goals').value.filter(r => r.goalName.toLocaleLowerCase()
                                                      .indexOf(searchTerm.toLocaleLowerCase()) != -1);

            this.setGoalFormGroup.controls['goalsToDisplay'] = this.setGoalsFormBuilder.array(
                                                             goalsToDisplay.slice().map(i => this.setGoalsFormBuilder.group(i)));
            setTimeout(() => {
                this.setGoalFormGroup.patchValue({

                    currentPage: 1
                });
            });
            //this.cdRef.detectChanges();
        }
        else {

            this.setGoalFormGroup.controls['goalsToDisplay'] = this.setGoalsFormBuilder.array(
                this.setGoalFormGroup.get('goals').value.slice().map(i => this.setGoalsFormBuilder.group(i)));

            setTimeout(() => {
                this.setGoalFormGroup.patchValue({

                    currentPage: 1
                });
            });
           // this.cdRef.detectChanges();
        }
    }

    resetAddUpdateFormGroup() {

        let addUpdateFormGroup: FormGroup = <FormGroup>this.setGoalFormGroup.get('goalFormGroup');
        addUpdateFormGroup.patchValue({
            goalId: '',
            goalTitle: '',
            goalDescription: '',
            weightage: ''
        });

        addUpdateFormGroup.reset();
    }

    addGoal(goalToAdd: Goal) {

        let addUpdateFormGroup: FormGroup = <FormGroup>this.setGoalFormGroup.get('goalFormGroup');

        let existing_goals = this.setGoalFormGroup.get('employee_goals').value;
        let goal = existing_goals.find(x => x.goalId === goalToAdd.goalId);
        let weightage_sum = existing_goals.reduce((sum, cur) => sum + cur.weightage, 0);
        console.log(weightage_sum);

        if (goal != null) {
            this.toastrNotificationService.warning(`Goal ${goalToAdd.goalName} already added`);
        }
        else if (weightage_sum == 100) {
            this.toastrNotificationService.warning(`Goals already added have total of 100% weightage`);
        }
        else {
            addUpdateFormGroup.patchValue({
                goalId: goalToAdd.goalId,
                goalTitle: goalToAdd.goalName,
                goalDescription: '',
                weightage: ''
            });
        }
    }

    private isValidWeightageSum(currentWeightage): boolean {
        let valid: boolean = true;
        let existing_goals = this.setGoalFormGroup.get('employee_goals').value;
        let weightage_sum = existing_goals.reduce((sum, cur) => sum + cur.weightage, 0);
        if ((weightage_sum + currentWeightage) > 100)
            valid = false;
        return valid;
    }

    addUpdateIterationGoal() {

        let addUpdateFormGroup: FormGroup = <FormGroup>this.setGoalFormGroup.get('goalFormGroup');
        if (addUpdateFormGroup.valid && !((addUpdateFormGroup.value.weightage * 1) == 0)
            && this.isValidWeightageSum(addUpdateFormGroup.value.weightage * 1)) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Continue to save iteration goal?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Saving Iteration Goal. Please wait.....');
                            this.spinnerService.busy();
                            let userUpdateRequestModel: EmployeeIterationGoalRequestModel = this.mapFormGroupToEmployeeGoalRequestModel();
                            this.setGoalsService.addEmployeeIterationGoal(userUpdateRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    addUpdateFormGroup.reset();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('Goal added successfully');
                                },
                                error => {
                                     this.spinnerService.idle();
                                     console.log('Exception occured while adding goal');
                                });
                        }
                    }
                }
            });
        }
        else {
            this.toastrNotificationService.warning('Invalid Data Entered');
        }
    }



    private mapFormGroupToEmployeeGoalRequestModel(): EmployeeIterationGoalRequestModel {

        let addUpdateFormGroup: FormGroup = <FormGroup>this.setGoalFormGroup.get('goalFormGroup');
        let employeeIterationGoalRequestModel: EmployeeIterationGoalRequestModel = new EmployeeIterationGoalRequestModel();
        employeeIterationGoalRequestModel.iterationId = this.iterationId;
        employeeIterationGoalRequestModel.employeeId = this.employeeId;
        employeeIterationGoalRequestModel.description = addUpdateFormGroup.value.goalDescription;
        employeeIterationGoalRequestModel.goalId = addUpdateFormGroup.value.goalId * 1;
        employeeIterationGoalRequestModel.weightage = addUpdateFormGroup.value.weightage * 1;

        return employeeIterationGoalRequestModel;
    }

    showGoalSettingSections() {
        return this.employeeIterationStateId != Constant.ITERATION_STATE.NOT_STARTED;
    }

    updateEmployeeIterationState() {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Activate Iteration for setting goals?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Activating Iteration. Please wait.....');
                            this.spinnerService.busy();
                            let updateIterationStateRequestModel: UpdateEmployeeIterationState = new UpdateEmployeeIterationState();
                            updateIterationStateRequestModel.employeeId = this.employeeId * 1;
                            updateIterationStateRequestModel.iterationId = this.iterationId * 1;
                            updateIterationStateRequestModel.iterationStateId = Constant.ITERATION_STATE.SET_GOALS;

                            this.setGoalsService.updateEmployeeIterationState(updateIterationStateRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    this.employeeIterationStateId = Constant.ITERATION_STATE.SET_GOALS;
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('Iteration state actiated successfully');
                                },
                                error => {
                                    this.spinnerService.idle();
                                    console.log('Exception occured while updating iteration state');
                                });
                        }
                    }
                }
            });       
    }
}