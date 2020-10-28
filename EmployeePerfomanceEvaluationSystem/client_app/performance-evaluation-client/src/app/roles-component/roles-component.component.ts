import { Component, OnInit } from '@angular/core';
import { RoleService } from '../shared/services/roles/role-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { Role } from '../shared/models/roles/role';
import { NgForm } from '@angular/forms';

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

    constructor(private roleService: RoleService) { }
   
    ngOnInit(): void {
      this.resetVariables();
      this.getRolesFromDatabase();
    }

    resetVariables() {
        this.roleModel = new Role(0, '');
        this.searchTerm = '';
    }

    private getRolesFromDatabase() {

            this.roleService.getRoles()
                .subscribe((response: ApiResponse) => {

                    if (response.data != null) {
                        this.roles = Role.FormRolesModelArray(response);
                        this.rolesToDisplay = this.roles.slice();
                    }

                },
                error => {
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

        this.roleService.updateRole(this.roleModel)
            .subscribe((response: ApiResponse) => {

                var role = this.roles.find(r => r.roleId == this.roleModel.roleId);
                if (null !== role) {
                    role.roleName = this.roleModel.roleName;
                }

                roleForm.resetForm();
                this.resetAfterDbOperation();
  
                this.rolesToDisplay = this.roles.slice();
            },
            error => {
               console.log('Exception occured while updating roles from Database');
            });
    }

    private addRole(roleForm: NgForm) {

        this.roleService.addRole(this.roleModel)
            .subscribe((response: ApiResponse) => {

                var newRole = new Role(response.data.roleId, response.data.roleName);
                this.roles.push(newRole);
                this.rolesToDisplay =  this.roles.slice();
                this.resetAfterDbOperation();
                roleForm.resetForm();

            },
            error => {
                console.log('Exception occured while adding roles to Database');
            });
    }

    editRole(role: Role) {
        this.roleModel = new Role(role.roleId, role.roleName);
    }

    resetRoleSelection() {
        this.resetVariables();
    }

    private resetAfterDbOperation() {
        this.resetVariables();
        this.currentPage = 1;
    }

    deleteRole(role: Role) {

        this.roleService.deleteRole(role)
            .subscribe((response: ApiResponse) => {

                this.roles = this.roles.filter(r => r.roleId != role.roleId);
                this.rolesToDisplay = this.roles.slice();
                this.resetAfterDbOperation();

         },
         error => {
             console.log('Exception occured while deleting roles from Database');
         });
    }

    searchRole() {
        if (this.searchTerm != '') {
            this.rolesToDisplay = this.roles.filter(r => r.roleName.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            this.currentPage = 1;
        }
        else {
            this.rolesToDisplay = this.roles.slice();
            this.currentPage = 1;
        }
    }
}
