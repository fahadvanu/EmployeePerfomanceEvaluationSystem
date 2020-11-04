import { Component, OnInit } from '@angular/core';
import { UpdatePasswordRequestModel } from '../../../shared/models/accounts/need-help/update-password/update-password-request-model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../../../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../../confirm-modal-component/confirm-modal-component';
import { AccountService } from '../../../shared/services/accounts/accounts-service';
import { ApiResponse } from '../../../shared/models/api-responses/api-response';

@Component({
    templateUrl: './update-password-component.html',
    styleUrls: ['./update-password-component.css']
})
export class UpdatePasswordComponent implements OnInit {

    updatepasswordResetRequestModel: UpdatePasswordRequestModel = new UpdatePasswordRequestModel();
    modalRef: BsModalRef;

    constructor(private router: Router,
        private spinnerService: SpinnerService,
        private toastrNotificationService: ToastrNotificationService,
        private modalService: BsModalService,
        private accountService: AccountService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.updatepasswordResetRequestModel.token = params['token'];
            console.log(this.updatepasswordResetRequestModel.token);
        });
    }

    updatePassword(ngForm: NgForm) {

        if (ngForm.valid) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: `Do you want to continue?`,
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Please wait.....');
                            this.spinnerService.busy();
                            this.accountService.updatePassword(this.updatepasswordResetRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    if (response.data) {
                                        ngForm.reset();
                                        this.spinnerService.idle();
                                        this.toastrNotificationService.success('Password updated successfully');
                                        this.router.navigate(['/login']);
                                    }
                                    else {
                                        ngForm.reset();
                                        this.spinnerService.idle();
                                        this.toastrNotificationService.success('Password update failed');
                                    }
                                },
                                error => {
                                    this.spinnerService.idle();
                                    console.log('Exception occured while updating. Please try again');
                                });
                        }
                    }
                }
            });
        }
    }

}