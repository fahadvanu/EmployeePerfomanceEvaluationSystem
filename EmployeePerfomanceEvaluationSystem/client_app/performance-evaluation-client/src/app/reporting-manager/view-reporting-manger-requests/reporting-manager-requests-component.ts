import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../shared/services/user/user-service';
import { ApiResponse } from '../../shared/models/api-responses/api-response';
import { ReportingManagerResponseModel } from '../../shared/models/user/reporting-manager-response-model';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../confirm-modal-component/confirm-modal-component';
import { ApproveReportingManagerRequestModel } from '../../shared/models/user/approve-reporting-manager-request-model';

@Component({
    templateUrl: './reporting-manager-requests-component.html',
    styleUrls: ['./reporting-manager-requests-component.css']
})
export class ReportingManagerRequestsComponent implements OnInit {

    pendingRequests: Array<ReportingManagerResponseModel> = new Array<ReportingManagerResponseModel>();
    pendingRequestsToDisplay: Array<ReportingManagerResponseModel> = new Array<ReportingManagerResponseModel>();
    currentPage: number = 1;
    itemsPerPage: number = 5;
    searchTerm: string;
    loading: boolean = false;
    modalRef: BsModalRef;

    constructor(private userService: UserService,
        private spinnerService: SpinnerService,
        private toastrNotificationService: ToastrNotificationService,
        private cdRef: ChangeDetectorRef,
        private modalService: BsModalService) { }

    ngOnInit(): void {

        this.resetVariables();
        this.getPendingRequestsFromDatabase();
    }

    resetVariables() {
        this.searchTerm = '';
    }

    private getPendingRequestsFromDatabase() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading pending reporting manager requests.....');
        this.spinnerService.busy();
        this.userService.getPendingReportingManagerRequests()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.pendingRequests = ReportingManagerResponseModel.FormReportingRequestsModelArray(response);
                    this.pendingRequestsToDisplay = this.pendingRequests.slice();
                }

                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching pending reporting manager requests from Database');
            });
    }

    pageChanged(event: any) {
        this.currentPage = event.page;
    }

    searchRequests() {

        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.pendingRequestsToDisplay = this.pendingRequests.filter(r => r.reportedUserEmail.toLocaleLowerCase()
                                                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.pendingRequestsToDisplay = this.pendingRequests.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }

    approveRequest(request: ReportingManagerResponseModel) {

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: 'Are you sure you want to confirm request?',
                callback: (result) => {
                    if (result) {

                        let approvalRequest: ApproveReportingManagerRequestModel = this.mapApprovalReportingManagerRequest(request);
                        this.spinnerService.updateMessage('Updating reporting manager.....');
                        this.spinnerService.busy();
                        this.userService.approvePendingReportingManagerRequests(approvalRequest)
                            .subscribe((response: ApiResponse) => {

                                this.getPendingRequestsFromDatabaseAfterEditDelete('Request approved successfully');
                               
                            },
                            error => {
                                 this.spinnerService.idle();
                                 console.log('Exception occured while approving reporting manager request');
                            });
                    }
                }
            }
        });
    }

    private mapApprovalReportingManagerRequest(request: ReportingManagerResponseModel): ApproveReportingManagerRequestModel {

        let approvalRequest: ApproveReportingManagerRequestModel = new ApproveReportingManagerRequestModel();
        approvalRequest.reportingManagerRequestId = request.reportingManagerRequestId;
        approvalRequest.reportedUserId = request.reportedUserId;
        approvalRequest.reportedUserEmail = request.reportedUserEmail;
        approvalRequest.currentReportingManagerId = request.currentReportingManagerId;
        approvalRequest.currentReportingManagerEmail = request.currentReportingManagerEmail;
        approvalRequest.newReportingManagerId = request.newReportingManagerId;
        approvalRequest.newReportingManagerEmail = request.newReportingManagerEmail;
        approvalRequest.status = request.status;

        return approvalRequest;
    }

    deleteRequest(request: ReportingManagerResponseModel) {

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: 'Are you sure you want to delete request?',
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage('Deleting reporting manager request.....');
                        this.spinnerService.busy();
                        this.userService.rejectPendingReportingManagerRequests(request.reportingManagerRequestId)
                            .subscribe((response: ApiResponse) => {

                                this.getPendingRequestsFromDatabaseAfterEditDelete('Request deleted successfully');

                            },
                            error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while deleting reporting manager request');
                            });
                    }
                }
            }
        });
    }

    private getPendingRequestsFromDatabaseAfterEditDelete(message: string) {

        this.userService.getPendingReportingManagerRequests()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.pendingRequests = ReportingManagerResponseModel.FormReportingRequestsModelArray(response);
                    this.pendingRequestsToDisplay = this.pendingRequests.slice();
                }

                this.resetAfterDbOperation();
                this.spinnerService.idle();
                this.toastrNotificationService.success(message);
            },
           error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured getPendingRequestsFromDatabaseAfterEditDelete()');
           });
    }

    private resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
}