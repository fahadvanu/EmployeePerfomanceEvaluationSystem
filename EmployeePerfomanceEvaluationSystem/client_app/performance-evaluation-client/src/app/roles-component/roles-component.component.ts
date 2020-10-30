import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { RoleService } from '../shared/services/roles/role-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { Role } from '../shared/models/roles/role';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';

@Component({
  templateUrl: './roles-component.component.html',
  styleUrls: ['./roles-component.component.css']
})
export class RolesComponentComponent implements OnInit {

    roles: Array<Role> = new Array<Role>();
    rolesToDisplay: Array<Role> = new Array<Role>();
    currentPage: number = 1;
    itemsPerPage: number = 5;
    roleModel: Role;
    searchTerm: string;
    loading: boolean = false;
    modalRef: BsModalRef;

    constructor(private roleService: RoleService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private cdRef: ChangeDetectorRef,
                private modalService: BsModalService) { }
   
    ngOnInit(): void {
      this.resetVariables();
      this.getRolesFromDatabase();
    }

    resetVariables() {
        this.roleModel = new Role(0, '');
        this.searchTerm = '';
    }

    private getRolesFromDatabase() {

            this.loading = true;
            this.spinnerService.updateMessage('Loading Roles.....');
            this.spinnerService.busy();
            this.roleService.getRoles()
                .subscribe((response: ApiResponse) => {

                    if (response.data != null) {
                        this.roles = Role.FormRolesModelArray(response);
                        this.rolesToDisplay = this.roles.slice();
                    }
                    this.loading = false;
                    this.spinnerService.idle();
                },
                error => {
                    this.loading = false;
                    this.spinnerService.idle();
                    console.log('Exception occured while fetching roles from Database');
                });
    }

    pageChanged(event: any) {
        this.currentPage = event.page;
    }

    addUpdateRole(roleForm: NgForm) {

        if (roleForm.valid) {
            if (this.roleModel.roleId != 0) {
                this.updateRole(roleForm);
            }
            else {
                this.addRole(roleForm);
            }
        }
    }

    private updateRole(roleForm: NgForm) {

        this.spinnerService.updateMessage('Updating Role.....');
        this.spinnerService.busy();
        this.roleService.updateRole(this.roleModel)
            .subscribe((response: ApiResponse) => {

                var role = this.roles.find(r => r.roleId == this.roleModel.roleId);
                if (null !== role) {
                    role.roleName = this.roleModel.roleName;
                }

                roleForm.resetForm();
                this.resetAfterDbOperation();
  
                this.rolesToDisplay = this.roles.slice();
                this.spinnerService.idle();
                this.toastrNotificationService.success('Role updated successfully');
            },
            error => {
               this.spinnerService.idle();
               console.log('Exception occured while updating roles from Database');
            });
    }

    private addRole(roleForm: NgForm) {

        this.spinnerService.updateMessage('Adding Role.....');
        this.spinnerService.busy();
        this.roleService.addRole(this.roleModel)
            .subscribe((response: ApiResponse) => {

                var newRole = new Role(response.data.roleId, response.data.roleName);
                this.roles.push(newRole);
                this.rolesToDisplay =  this.roles.slice();
                this.resetAfterDbOperation();
                roleForm.resetForm();
                this.spinnerService.idle();
                this.toastrNotificationService.success('Role added successfully');
            },
            error => {
                this.spinnerService.idle();
                console.log(`Exception occured while adding roles to Database`, error);
            });
    }

    editRole(role: Role) {
        this.roleModel = new Role(role.roleId, role.roleName);
    }

    resetRoleSelection(roleForm: NgForm) {
        this.resetVariables();
        roleForm.resetForm();
        this.rolesToDisplay = this.roles.slice();
        setTimeout(() => {
            this.currentPage = 1;
        });   
        this.cdRef.detectChanges();
    }

    private resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });      
        this.cdRef.detectChanges();
    }

    deleteRole(role: Role) {

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: 'Are you sure you want to delete this record?',
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage('Deleting Role.....');
                        this.spinnerService.busy();
                        this.roleService.deleteRole(role)
                            .subscribe((response: ApiResponse) => {

                                this.roles = this.roles.filter(r => r.roleId != role.roleId);
                                this.rolesToDisplay = this.roles.slice();
                                this.resetAfterDbOperation();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('Role deleted successfully');

                            },
                            error => {
                                    this.spinnerService.idle();
                                    console.log('Exception occured while deleting roles from Database');
                            });
                    }
                }
            }
        });       
    }

    searchRole() {
        if (this.searchTerm != '') {
            this.rolesToDisplay = this.roles.filter(r => r.roleName.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            }, 0);   
            this.cdRef.detectChanges();   
        }
        else {
            this.rolesToDisplay = this.roles.slice();
            setTimeout(() => {
                this.currentPage = 1;
            }, 0);   
            this.cdRef.detectChanges();
        }
    }
}
