import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PasswordMatchValidation } from './password-match-validation';
import { RoleService } from '../../shared/services/roles/role-service';
import { ApiResponse } from '../../shared/models/api-responses/api-response';
import { Role } from '../../shared/models/roles/role';
import { DepartmentService } from '../../shared/services/departments/departments-service';
import { Department } from '../../shared/models/departments/department';
import { AccountService } from '../../shared/services/accounts/accounts-service';
import { RegistrationRequestModel } from '../../shared/models/accounts/user-registration/registration-request';
import { SpinnerService } from '../../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../confirm-modal-component/confirm-modal-component';


@Component({
    templateUrl: './user-registration-component.html',
    styleUrls: ['./user-registration-component.css']
})
export class UserRegistrationComponent  implements OnInit {

    registrationFormGroup: FormGroup;
    roles: Array<Role> = Array<Role>();
    departments: Array<Department> = new Array<Department>();
    modalRef: BsModalRef;

    constructor(private registrationFormBuilder: FormBuilder,
                private roleService: RoleService,
                private departmentService: DepartmentService,
                private accountService: AccountService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService) {

    }

    ngOnInit() {
        this.initializeRegistrationFormGroup();
        this.loadRoles();
        this.loadDepartments();
    }

    private initializeRegistrationFormGroup() {
        this.registrationFormGroup = this.registrationFormBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(50)]],

            lastName: ['', [Validators.required, Validators.maxLength(50)]],

            email: ['', [Validators.required, Validators.maxLength(100),
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

            passwordGroup: this.registrationFormBuilder.group({
                password: ['', [Validators.required,
                    this.patternValidator()
                ]],

                confirmPassword: ['']
            }, { validator: PasswordMatchValidation.matchPassword } ),

            contactNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],

            gender: ['', [Validators.required]],

            role: ['', [Validators.required]],

            department: ['', [Validators.required]],
        });
    }

    loadRoles() {

        this.roleService.getRoles()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.roles = Role.FormRolesModelArray(response);
                }
            },
                error => {

                console.log('Exception occured while fetching roles from Database');
            });
    }

    loadDepartments() {

        this.departmentService.getDepartments()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.departments = Department.FormDepartmentModelArray(response);
                }
            },
            error => {

                console.log('Exception occured while fetching roles from Database');
            });
    }

    registerUser() {
        if (this.registrationFormGroup.valid) {
           
            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Continue to register?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Registering User. Please wait.....');
                            this.spinnerService.busy();
                            var registrationRequestModel: RegistrationRequestModel = this.MapFormGroupToRegistrationRequest();
                            this.accountService.registerUser(registrationRequestModel)
                                .subscribe((response: ApiResponse) => {

                                    this.registrationFormGroup.reset();
                                    this.initializeRegistrationFormGroup();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('User registered successfully');
                                },
                                error => {
                                    this.spinnerService.idle();
                                    console.log('Exception occured while registering new user');
                                });
                        }
                    }
                }
            });

        }
    }

    private MapFormGroupToRegistrationRequest(): RegistrationRequestModel{

        var registrationRequestModel = new RegistrationRequestModel();
        registrationRequestModel.firstName = this.registrationFormGroup.value.firstName;
        registrationRequestModel.lastName = this.registrationFormGroup.value.lastName;
        registrationRequestModel.email = this.registrationFormGroup.value.email;
        registrationRequestModel.password = this.registrationFormGroup.value.passwordGroup.password;
        registrationRequestModel.userName = this.registrationFormGroup.value.email;
        registrationRequestModel.roleId = this.registrationFormGroup.value.role * 1;
        registrationRequestModel.departmentId = this.registrationFormGroup.value.department * 1;
        registrationRequestModel.gender = this.registrationFormGroup.value.gender;
        registrationRequestModel.contactNumber = ''+this.registrationFormGroup.value.contactNumber;
        registrationRequestModel.reportingManagerId = 0;

        return registrationRequestModel;
    }

    navigateLogin() {

    }

    patternValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    }
}