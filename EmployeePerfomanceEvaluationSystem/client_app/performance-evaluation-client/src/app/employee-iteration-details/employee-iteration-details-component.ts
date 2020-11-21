import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { Constant } from '../shared/constant/constants';
import { UserResponseModel } from '../shared/models/user/user-response-model';
import { Router } from '@angular/router';
import { IterationDetailsResponse } from '../shared/models/iteration/iteration-details-response';

@Component({
    templateUrl: './employee-iteration-details-component.html',
    styleUrls: ['./employee-iteration-details-component.css']
})
export class EmployeeIterationDetailsComponent implements OnInit {

    iterations: Array<IterationResponseModel> = new Array<IterationResponseModel>();
    loading: boolean = false;
    modalRef: BsModalRef;
    selectedReviewPeriod: any = '';
    iterationDetailResponseModel: IterationDetailsResponse;
    user: UserResponseModel;
    iterationStepCompleted: number = 0;

    constructor(private iterationService: IterationService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private cdRef: ChangeDetectorRef,
                private modalService: BsModalService,
                private router: Router) { }

    ngOnInit(): void {
        this.getIterationDetailScreenData();
    }

    private getIterationDetailScreenData() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading.....');
        this.spinnerService.busy();
        this.iterationService.getIterationDetailScreenData()
            .subscribe((responses: Array<ApiResponse>) => {

                if (responses[0].data != null) {
                    this.iterations = IterationResponseModel.FormIterationModelArray(responses[0]);
                }

                if (responses[1].data != null) {
                    this.user = UserResponseModel.formUserResponseModel(responses[1]);
                }
                console.log(this.user);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching iteration details screen data from Database');
           });
    }

    getIterationDetails() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading iteration details.....');
        this.spinnerService.busy();
        this.iterationService.getEmployeeIterationDetails(this.selectedReviewPeriod * 1)
            .subscribe((response : ApiResponse) => {

                if (response.data != null) {
                    this.iterationDetailResponseModel = IterationDetailsResponse.FormIterationDetailsModel(response);
                    this.formIterationStepCompleted();
                }

                console.log(this.iterationDetailResponseModel);
                
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                 this.loading = false;
                 this.spinnerService.idle();
                 console.log('Exception occured while fetching iteration details from Database');
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

    getIterationState(state: number) {

        if (state == Constant.ITERATION_STATE.NOT_STARTED)
            return Constant.NOT_STARTED;

        if (state == Constant.ITERATION_STATE.SET_GOALS)
            return Constant.SET_GOALS;

        if (state == Constant.ITERATION_STATE.SELF_EVALUATION)
            return Constant.EMPLOYEE_EVALUATION;

        if (state == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return Constant.MANAGER_EVALUATION;

        if (state == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return Constant.REVIEW_METTING;

        if (state == Constant.ITERATION_STATE.COMPLETED)
            return Constant.COMPLETE;
    }

    getStepsCompleted(state: number) {


        if (state == Constant.ITERATION_STATE.NOT_STARTED)
            return 0;

        if (state == Constant.ITERATION_STATE.SET_GOALS)
            return 0;

        if (state == Constant.ITERATION_STATE.SELF_EVALUATION)
            return 1;

        if (state == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return 2;

        if (state == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return 3;

        if (state == Constant.ITERATION_STATE.COMPLETED)
            return 4;
    }

    private formIterationStepCompleted() {

        if (this.iterationDetailResponseModel.iterationStateId == Constant.ITERATION_STATE.NOT_STARTED)
            this.iterationStepCompleted = 0;

        if (this.iterationDetailResponseModel.iterationStateId == Constant.ITERATION_STATE.SET_GOALS)
            this.iterationStepCompleted = 0;

        if (this.iterationDetailResponseModel.iterationStateId == Constant.ITERATION_STATE.SELF_EVALUATION)
            this.iterationStepCompleted = 25;

        if (this.iterationDetailResponseModel.iterationStateId == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            this.iterationStepCompleted = 50;

        if (this.iterationDetailResponseModel.iterationStateId == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            this.iterationStepCompleted = 75;

        if (this.iterationDetailResponseModel.iterationStateId == Constant.ITERATION_STATE.COMPLETED)
            this.iterationStepCompleted = 100;

    }
}