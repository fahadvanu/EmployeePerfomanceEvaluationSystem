import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user/user-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { Role } from '../shared/models/roles/role';
import { Department } from '../shared/models/departments/department';
import { Router } from '@angular/router';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { UserUpdateRequestModel } from '../shared/models/user/user-update-request-model';

@Component({
    templateUrl: './user-details-component.html',
    styleUrls: [
        './user-details-component.css'
    ]
})
export class UserDetailsComponent implements OnInit {

    userDetailFormGroup: FormGroup;
    roles: Array<Role> = Array<Role>();
    departments: Array<Department> = new Array<Department>();
    modalRef: BsModalRef;

    constructor(private userDetailFormBuilder: FormBuilder,
                private userService: UserService,
                private spinnerService: SpinnerService,
                private router: Router,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService) { }

    ngOnInit() {

        this.initializeUserDetailFormGroup();
        this.getUserDetailsScreenData();
    }

    private initializeUserDetailFormGroup() {

        this.userDetailFormGroup = this.userDetailFormBuilder.group({
            userId: [''],
            firstName: ['', [Validators.required, Validators.maxLength(100)]],
            lastName: ['', [Validators.required, Validators.maxLength(100)]],
            contactNumber: ['', [Validators.required, Validators.maxLength(10)]],
            gender: ['', [Validators.required]],
            role: ['', [Validators.required]],
            department: ['', [Validators.required]]
        });

    }

    private getUserDetailsScreenData() {

        this.spinnerService.updateMessage('Getting User Details. Please wait.....');
        this.spinnerService.busy();

        this.userService.getUserDetailScreenData()
            .subscribe((responses: Array<ApiResponse>) => {

                this.spinnerService.idle();
                console.log(responses)
                this.bindUserDetailsFormGroup(responses);
        },
        error => {

                this.spinnerService.idle();
                console.log('Error occured while fetching User details screen data');
        })

    }

    private bindUserDetailsFormGroup(responses: Array<ApiResponse>) {

        if (responses[1].data != null) {
            this.roles = Role.FormRolesModelArray(responses[1]);
        }

        if (responses[2].data != null) {
            this.departments = Department.FormDepartmentModelArray(responses[2]);
        }

        this.userDetailFormGroup.patchValue({
            userId: responses[0].data.userId,
            firstName: responses[0].data.firstName,
            lastName: responses[0].data.lastName,
            contactNumber: responses[0].data.contactNumber,
            gender: responses[0].data.gender,
            role: responses[0].data.roleId,
            department: responses[0].data.departmentId,
        });

        console.log(this.userDetailFormGroup.value);
    }

    updateUserDetails() {

        if (this.userDetailFormGroup.valid) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Continue to update your details?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Updating details. Please wait.....');
                            this.spinnerService.busy();
                            console.log(this.userDetailFormGroup.value);
                            let userUpdateRequestModel: UserUpdateRequestModel = this.mapFormGroupToUserUpdateRequestModel();
                            this.userService.updateUserDetails(userUpdateRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    this.userDetailFormGroup.reset();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('User details updated successfully');
                                    this.router.navigate(['/home']);
                                },
                                error => {
                                    this.spinnerService.idle();
                                    console.log('Exception occured while registering updating user details');
                                });
                        }
                    }
                }
            });

        }
    }

    private mapFormGroupToUserUpdateRequestModel(): UserUpdateRequestModel{
        let userUpdateRequestModel: UserUpdateRequestModel = new UserUpdateRequestModel();
        userUpdateRequestModel.userId = this.userDetailFormGroup.value.userId * 1;
        userUpdateRequestModel.firstName = this.userDetailFormGroup.value.firstName;
        userUpdateRequestModel.lastName = this.userDetailFormGroup.value.lastName;
        userUpdateRequestModel.contactNumber = ''+this.userDetailFormGroup.value.contactNumber;
        userUpdateRequestModel.gender = this.userDetailFormGroup.value.gender;
        userUpdateRequestModel.roleId = this.userDetailFormGroup.value.role * 1;
        userUpdateRequestModel.departmentId = this.userDetailFormGroup.value.department * 1;

        return userUpdateRequestModel;
    }

    navigateHome() {

        if (this.userDetailFormGroup.dirty) {

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
}