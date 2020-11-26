import { Component, OnInit } from '@angular/core';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { Constant } from '../shared/constant/constants';
import { UserResponseModel } from '../shared/models/user/user-response-model';
import { Router, ActivatedRoute } from '@angular/router';
import { IterationDetailsResponse } from '../shared/models/iteration/iteration-details-response';
import { Rating } from '../shared/models/ratings/rating';
import { EmployeeIterationRatingModel } from '../shared/models/set-goals/employee_iteration_model';
import { EmployeeRatingRequestModel } from '../shared/models/set-goals/employee-rating-request-model';
import { UpdateEmployeeIterationState } from '../shared/models/set-goals/update-iteration-request-model';
import { SetGoalsService } from '../shared/services/set-goals/set-goals-service';

@Component({

    templateUrl: './employee-iteration-component.html',
    styleUrls: ['./employee-iteration-component.css']

})
export class EmployeeIterationComponent implements OnInit {

    loading: boolean = false;
    modalRef: BsModalRef;
    employee_iteration_formgroup: FormGroup;
    employeeId: number = 0;
    iterationId: number = 0;
    ratings: Array<Rating> = new Array<Rating>();

    constructor(private iterationService: IterationService,
        private spinnerService: SpinnerService,
                private setGoalService: SetGoalsService,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService,
                private router: Router,
                private employee_iteration_formbuilder: FormBuilder,
                private route: ActivatedRoute) { }

    ngOnInit() {

        this.initializeUserDetailFormGroup();

        this.route.params.subscribe(params => {
            this.iterationId = params['iterationId'] * 1;
            this.employeeId = params['userId'] * 1;
            this.loadEmployeeIterationComponentData();
        });
    }

    private initializeUserDetailFormGroup() {

        this.employee_iteration_formgroup = this.employee_iteration_formbuilder.group({

            iteration_detail: [ null ],
            employee_detail: [null],
            iteration_rating: this.employee_iteration_formbuilder.group({
                manager_requested: [null],
                goal_ratings: this.employee_iteration_formbuilder.array([])
            })
        });
    }

    private loadEmployeeIterationComponentData() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading.....');
        this.spinnerService.busy();
        this.iterationService.getEmployeeIterationScreenData(this.employeeId, this.iterationId)
            .subscribe((responses: Array<ApiResponse>) => {

                let iteration_detail: IterationDetailsResponse = null;
                if (responses[0].data != null) {
                    iteration_detail = IterationDetailsResponse.FormIterationDetailsModel(responses[0]);
                }

                let employee_detail: UserResponseModel = null;
                if (responses[1].data != null) {
                    employee_detail = UserResponseModel.formUserResponseModel(responses[1]);
                }

                if (responses[2].data != null) {
                    this.ratings = Rating.FormRatingModelArray(responses[2]);
                }

                let iterationRatingModel: EmployeeIterationRatingModel = null;
                if (responses[3].data != null) {
                    iterationRatingModel = EmployeeIterationRatingModel.FormEmployeeIterationRatingModel(responses[3], this.ratings);

                    let iteration_rating_formgroup: FormGroup = <FormGroup>this.employee_iteration_formgroup.controls['iteration_rating'];
                    iteration_rating_formgroup.controls['goal_ratings'] = this.employee_iteration_formbuilder.array(
                           iterationRatingModel.goals_ratings
                                                        .slice()
                                                        .map(i =>
                                                            this.employee_iteration_formbuilder.group(i)
                        ));

                    iteration_rating_formgroup.patchValue({
                        manager_requested: iterationRatingModel.isManagerRequested
                    });
                }

                this.employee_iteration_formgroup.patchValue({
                    iteration_detail: iteration_detail,
                    employee_detail: employee_detail
                });

                
                console.log(this.employee_iteration_formgroup.value);
                console.log(this.ratings);

                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching employee iteration details from Database');
            });

    }

    saveEmployeeRating(requestModel: EmployeeRatingRequestModel) {

        requestModel.employeeId = this.employeeId;

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: 'Continue to save iteration rating?',
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage('Saving Iteration rating. Please wait.....');
                        this.spinnerService.busy();
                        

                        this.iterationService.saveEmployeeRating(requestModel)
                                .subscribe((response: ApiResponse) => {

                                    this.fetchRatingsAfterSaved('Rating saved successfully');
                                },
                                error => {

                                   this.spinnerService.idle();
                                   console.log('Exception occured while updating goal');
                               });
                        
                    }
                }
            }
        });
    }

    private fetchRatingsAfterSaved(message: string) {

        this.iterationService.getEmployeeIterationRatings(this.iterationId, this.employeeId)
            .subscribe((response: ApiResponse) => {


                let iterationRatingModel: EmployeeIterationRatingModel = null;
                if (response.data != null) {
                    iterationRatingModel = EmployeeIterationRatingModel.FormEmployeeIterationRatingModel(response, this.ratings);

                    let iteration_rating_formgroup: FormGroup = <FormGroup>this.employee_iteration_formgroup.controls['iteration_rating'];
                    iteration_rating_formgroup.controls['goal_ratings'] = this.employee_iteration_formbuilder.array(
                        iterationRatingModel.goals_ratings
                            .slice()
                            .map(i =>
                                this.employee_iteration_formbuilder.group(i)
                            ));

                    iteration_rating_formgroup.patchValue({
                        manager_requested: iterationRatingModel.isManagerRequested
                    });
                }

                this.spinnerService.idle();
                this.toastrNotificationService.success(message);
            },
            error => {

                this.spinnerService.idle();
                console.log('Exception occured while fecthing ratings after saved');
            });
    }

    proceedIteration(iterationStateId: number) {

        if (iterationStateId == Constant.ITERATION_STATE.SELF_EVALUATION) {

            let result: boolean = this.validateEmployeeGoals();
            if (!result) {
                this.toastrNotificationService.warning('Please complete all the goals set first');
                return;
            }
        }

        let message = this.getIterationNextStateMessage(iterationStateId);
        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: `Proceed Iteration stage for ${message}?`,
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage(`Proceeding ${message} state. Please wait.....`);
                        this.spinnerService.busy();
                        let updateIterationStateRequestModel: UpdateEmployeeIterationState = new UpdateEmployeeIterationState();
                        updateIterationStateRequestModel.employeeId = this.employeeId * 1;
                        updateIterationStateRequestModel.iterationId = this.iterationId * 1;
                        updateIterationStateRequestModel.iterationStateId = this.getIterationNextState(iterationStateId);

                        this.setGoalService.updateEmployeeIterationState(updateIterationStateRequestModel)
                            .subscribe((response: ApiResponse) => {

                                this.fetchEmployeeIterationAfterProceedingToNextState('Iteration state saved successfully');
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

    private fetchEmployeeIterationAfterProceedingToNextState(message: string) {

        this.iterationService.getEmployeeIterationScreenData(this.employeeId, this.iterationId)
            .subscribe((responses: Array<ApiResponse>) => {

                let iteration_detail: IterationDetailsResponse = null;
                if (responses[0].data != null) {
                    iteration_detail = IterationDetailsResponse.FormIterationDetailsModel(responses[0]);
                }

                let employee_detail: UserResponseModel = null;
                if (responses[1].data != null) {
                    employee_detail = UserResponseModel.formUserResponseModel(responses[1]);
                }

                if (responses[2].data != null) {
                    this.ratings = Rating.FormRatingModelArray(responses[2]);
                }

                let iterationRatingModel: EmployeeIterationRatingModel = null;
                if (responses[3].data != null) {
                    iterationRatingModel = EmployeeIterationRatingModel.FormEmployeeIterationRatingModel(responses[3], this.ratings);

                    let iteration_rating_formgroup: FormGroup = <FormGroup>this.employee_iteration_formgroup.controls['iteration_rating'];
                    iteration_rating_formgroup.controls['goal_ratings'] = this.employee_iteration_formbuilder.array(
                        iterationRatingModel.goals_ratings
                            .slice()
                            .map(i =>
                                this.employee_iteration_formbuilder.group(i)
                            ));

                    iteration_rating_formgroup.patchValue({
                        manager_requested: iterationRatingModel.isManagerRequested
                    });
                }

                this.employee_iteration_formgroup.patchValue({
                    iteration_detail: iteration_detail,
                    employee_detail: employee_detail
                });

                this.spinnerService.idle();
                this.toastrNotificationService.success(message);
            },
            error => {

                 this.spinnerService.idle();
                 console.log('Exception occured while fetching employee iteration details from Database');
            });
    }

    getIterationNextStateMessage(state: number) {


        if (state == Constant.ITERATION_STATE.SELF_EVALUATION)
            return Constant.MANAGER_EVALUATION;

        if (state == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return Constant.REVIEW_METTING;

        if (state == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return Constant.COMPLETE_ITERATION;

    }

    getIterationNextState(state: number) {


        if (state == Constant.ITERATION_STATE.SELF_EVALUATION)
            return Constant.ITERATION_STATE.MANAGER_EVALUATION;

        if (state == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING;

        if (state == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return Constant.ITERATION_STATE.COMPLETED;

    }

    private validateEmployeeGoals(): boolean {

        let result: boolean = true;

        let iteration_rating_formgroup: FormGroup = <FormGroup>this.employee_iteration_formgroup.controls['iteration_rating'];
        for (let rating of iteration_rating_formgroup.value.goal_ratings) {

            if ((rating.employeeRatingId == '' || rating.employeeRatingId == null)
                || (rating.employeeComments == '' || rating.employeeComments == null)) {
                result = false;
                break;
            }
        }

        return result;
    }
}