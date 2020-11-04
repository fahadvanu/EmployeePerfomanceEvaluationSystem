import { Component, OnInit } from '@angular/core';
import { PasswordResetRequestModel } from '../../../shared/models/accounts/need-help/password-reset/password-reset-request-model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../../../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../../confirm-modal-component/confirm-modal-component';
import { AccountService } from '../../../shared/services/accounts/accounts-service';
import { ApiResponse } from '../../../shared/models/api-responses/api-response';

@Component({
    templateUrl: './password-reset-component.html',
    styleUrls: ['./password-reset-component.css']
})
export class PasswordResetComponent implements OnInit {

    passwordResetRequestModel: PasswordResetRequestModel = new PasswordResetRequestModel();
    modalRef: BsModalRef;

    constructor(private router: Router,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService,
                private accountService: AccountService) { }

    ngOnInit() {}

    submitPasswordResetRequest(ngForm: NgForm) {

        if (ngForm.valid) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: `Password reset link will be email on ${ this.passwordResetRequestModel.email }. Do you want to continue?`,
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Please wait.....');
                            this.spinnerService.busy();
                            this.accountService.passwordReset(this.passwordResetRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    ngForm.reset();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('Password reset email is sent successfully');
                                },
                                error => {
                                    this.spinnerService.idle();
                                    console.log('Exception occured while sending email. Please try again');
                               });
                        }
                    }
                }
            });
        }
    }

    navigateBackToLogin(ngForm: NgForm) {

        if (ngForm.dirty) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Discard changes and navigate back to Login page?',
                    callback: (result) => {
                        if (result) {

                            this.router.navigate(['/login']);
                        }
                    }
                }
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}