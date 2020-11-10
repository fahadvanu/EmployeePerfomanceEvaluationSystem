import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user/user-service';
import { ApiResponse } from '../../shared/models/api-responses/api-response';
import { SpinnerService } from '../../shared/services/spinner/spinner-service';
import { RegisteredUsers } from '../../shared/models/user/registered-users';
import { Router } from '@angular/router';
import { ToastrNotificationService } from '../../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../confirm-modal-component/confirm-modal-component';
import { UserResponseModel } from '../../shared/models/user/user-response-model';
import { ReportingManagerRequest } from '../../shared/models/user/reporting-manager-request-model';

@Component({
    templateUrl: './new-reporting-manager-request.html',
    styleUrls: ['./new-reporting-manager-request.css']
})
export class AddReportingManagerRequestComponent implements OnInit {

    reportingManagerRequestFormGroup: FormGroup;
    modalRef: BsModalRef;
    users: Array<RegisteredUsers> = new Array<RegisteredUsers>();

    constructor(private reportingManagerFormBuilder: FormBuilder,
                private userService: UserService,
                private spinnerService: SpinnerService,
                private router: Router,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService) { }

    ngOnInit() {

        this.initializeReportingManagerRequestFormGroup();
        this.getUserDetailsScreenData();
    }

    private initializeReportingManagerRequestFormGroup() {

        this.reportingManagerRequestFormGroup = this.reportingManagerFormBuilder.group({
            userId: [''],
            firstName: [''],
            lastName: [''],
            contactNumber: [''],
            email: [''],
            role: [''],
            department: [''],
            currentReportingManagerId: [''],
            currentReportingManager: [''],
            newReportingManagerId:['', [Validators.required]]
        });
    }

    private getUserDetailsScreenData() {

        this.spinnerService.updateMessage('Getting User Details. Please wait.....');
        this.spinnerService.busy();

        this.userService.getNewRortingManagerRequestScreenData()
            .subscribe((responses: Array<ApiResponse>) => {

                this.spinnerService.idle();
                this.bindReportingManagerFormGroup(responses);
            },
            error => {

                this.spinnerService.idle();
                console.log('Error occured while fetching User details screen data');
           })
    }

    private bindReportingManagerFormGroup(responses) {

        
        let userModel = UserResponseModel.formUserResponseModel(responses[0]);

        this.reportingManagerRequestFormGroup.patchValue({
            userId: userModel.id,
            firstName: userModel.firstName,
            lastName: userModel.lastName,
            contactNumber: userModel.contactNumber,
            email: userModel.email,
            role: (userModel.roleName == "") ? 'N/A' : userModel.roleName,
            department: (userModel.departmentName == "") ? 'N/A' : userModel.departmentName,
            currentReportingManagerId: userModel.reportingManagerId,
            currentReportingManager: userModel.reportingManager
        });

    
        this.users = RegisteredUsers.FormRegisterUsersModelArray(responses[1]);
    
    }

    navigateHome() {

        if (this.reportingManagerRequestFormGroup.dirty) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Discard changes and navigate back to Home page?',
                    callback: (result) => {
                        if (result) {

                            this.router.navigate(['/home']);
                        }
                    }
                }
            });
        }
        else {
            this.router.navigate(['/home']);
        }
    }

    submitReportingManagerRequest() {

        if (this.reportingManagerRequestFormGroup.valid && this.checkManagerValid()) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Continue to submit new reporting manager request?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Submitting request. Please wait.....');
                            this.spinnerService.busy();
                            let reportingManagerRequestModel: ReportingManagerRequest = this.mapFormGroupToReportingManagerRequestModel();
                            this.userService.submitUserReportingManagerRequest(reportingManagerRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    this.reportingManagerRequestFormGroup.reset();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('Request submitted successfully');
                                    this.router.navigate(['/home']);
                                },
                                    error => {
                                        this.spinnerService.idle();
                                        console.log('Exception occured while submitting');
                                    });
                        }
                    }
                }
            });

        }
        else {
            this.toastrNotificationService.warning('Please check the reporting manager selected');
        }
    }

    private checkManagerValid(): boolean {
        return this.reportingManagerRequestFormGroup.value.currentReportingManagerId * 1 !=  
            this.reportingManagerRequestFormGroup.value.newReportingManagerId * 1   
    }

    private mapFormGroupToReportingManagerRequestModel(): ReportingManagerRequest {
        let reportingManagerRequestModel: ReportingManagerRequest = new ReportingManagerRequest();
        reportingManagerRequestModel.reportedUserId = this.reportingManagerRequestFormGroup.value.userId * 1;
        reportingManagerRequestModel.currentReportingManagerId = this.reportingManagerRequestFormGroup.value.currentReportingManagerId * 1;
        reportingManagerRequestModel.newReportingManagerId = this.reportingManagerRequestFormGroup.value.newReportingManagerId * 1;       

        return reportingManagerRequestModel;
    }
}