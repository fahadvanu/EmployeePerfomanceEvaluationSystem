import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { Goal } from '../shared/models/goals/goal';
import { Constant } from '../shared/constant/constants';

@Component({
    templateUrl: './set-goals-component.html',
    styleUrls: ['./set-goals-component.css']
})
export class SetGoalsComponent implements OnInit {

    iterationId: number;
    employeeId: number;
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
            currentPage: [1]
        })
    }

    private loadSetGoalsComponentData() {


        this.loading = true;
        this.spinnerService.updateMessage('Loading data. Please wait.....');
        this.spinnerService.busy();
        this.iterationService.setGoalScreenData(this.employeeId, this.iterationId)
            .subscribe((responses: Array<ApiResponse>) => {

                console.log(responses);
                let goals: Array<Goal> = new Array<Goal>();
                if (responses[2].data != null) {
                   goals = Goal.FormGoalModelArray(responses[2]);
                }

                this.setGoalFormGroup.controls['goals'] = this.setGoalsFormBuilder.array(
                                                            goals.map(i => this.setGoalsFormBuilder.group(i)));

                this.setGoalFormGroup.controls['goalsToDisplay'] = this.setGoalsFormBuilder.array(
                                                            goals.slice().map(i => this.setGoalsFormBuilder.group(i)));

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
}