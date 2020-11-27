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

@Component({
    templateUrl: './view-iterations-component.html',
    styleUrls: ['./view-iterations-component.css']
})
export class ViewIterationsComponent implements  OnInit  {

    iterations: Array<IterationResponseModel> = new Array<IterationResponseModel>();
    users: Array<UserResponseModel> = new Array<UserResponseModel>();
    usersToDisplay: Array<UserResponseModel> = new Array<UserResponseModel>();
    currentPage: number = 1;
    itemsPerPage: number = 3;
    searchTerm: string;
    loading: boolean = false;
    modalRef: BsModalRef;
    selectedReviewPeriod: any = '';
    selectedReviewPeriodDetail: IterationResponseModel;

    constructor(private iterationService: IterationService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private cdRef: ChangeDetectorRef,
                private modalService: BsModalService,
                private router: Router) { }

    ngOnInit(): void {
        this.resetVariables();
        this.getActiveIterationScreenData();
    }

    resetVariables() {
        this.searchTerm = '';
    }

    private getActiveIterationScreenData() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading.....');
        this.spinnerService.busy();
        this.iterationService.getActiveIterationScreenData()
            .subscribe((responses: Array<ApiResponse>) => {

                if (responses[0].data != null) {
                    this.iterations = IterationResponseModel.FormIterationModelArray(responses[0]);
                }

                if (responses[1].data != null) {
                    this.users = UserResponseModel.formUserResponseModelArray(responses[1]);
                    this.usersToDisplay = this.users.slice();
                }

                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                 this.loading = false;
                 this.spinnerService.idle();
                 console.log('Exception occured while fetching active iterations from Database');
            });
    }

    displayIterationDetails() {
        console.log(this.selectedReviewPeriod);
        this.selectedReviewPeriodDetail = this.iterations.find(x => x.iterationId == (this.selectedReviewPeriod * 1));
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

    searchUsers() {

        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {

            this.usersToDisplay = this.users.filter(r => r.email.toLocaleLowerCase()
                                    .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {

            this.usersToDisplay = this.users.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }

    pageChanged(event: any) {
        this.currentPage = event.page;
    }

    setGoal(user: UserResponseModel) {
        console.log(user);
        console.log(this.selectedReviewPeriod);

        if (this.selectedReviewPeriod == '') {
            this.toastrNotificationService.warning("Please select the active iteration")
            return;
        }

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: `Continue to set goals for ${user.email}`,
                callback: (result) => {
                    if (result) {

                        this.router.navigate(['/set-goals/user', user.id, 'iteration', this.selectedReviewPeriod])
                    }
                }
            }
        });
    }

    reviewIteration(user: UserResponseModel) {

        if (this.selectedReviewPeriod == '') {
            this.toastrNotificationService.warning("Please select the active iteration")
            return;
        }

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: `Continue to review iteration for ${user.email}`,
                callback: (result) => {
                    if (result) {

                        this.router.navigate(['/view-iteration/user', user.id, 'iteration', this.selectedReviewPeriod * 1 ]);
                    }
                }
            }
        });
    }
}