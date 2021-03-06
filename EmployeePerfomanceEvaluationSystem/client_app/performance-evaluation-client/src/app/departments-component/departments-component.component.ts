import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DepartmentService } from '../shared/services/departments/departments-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { Department } from '../shared/models/departments/department';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';

@Component({
  selector: 'app-departments-component',
  templateUrl: './departments-component.component.html',
  styleUrls: ['./departments-component.component.css']
})
export class DepartmentsComponentComponent implements OnInit {

    departments: Array<Department> = new Array<Department>();
    departmentsToDisplay: Array<Department> = new Array<Department>();
    currentPage: number = 1;
    itemsPerPage: number = 5;
    departmentModel: Department;
    searchTerm: string;
    loading: boolean = false;
    modalRef: BsModalRef;

    constructor(private departmentService: DepartmentService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private cdRef: ChangeDetectorRef,
                private modalService: BsModalService) { }

    ngOnInit(): void {
        this.resetVariables();
        this.getDepartmentsFromDatabase();
    }

    resetVariables() {
        this.departmentModel = new Department(0, '');
        this.searchTerm = '';
    }

    private getDepartmentsFromDatabase() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading Departments.....');
        this.spinnerService.busy();
        this.departmentService.getDepartments()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.departments = Department.FormDepartmentModelArray(response);
                    this.departmentsToDisplay = this.departments.slice();
                }
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {
                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching departments from Database');
            });
    }

    pageChanged(event: any) {
        this.currentPage = event.page;
    }
    
    addUpdateDepartment(departmentForm: NgForm) {

        if (departmentForm.valid) {
            if (this.departmentModel.departmentId != 0) {
                this.updateDepartment(departmentForm);
            }
            else {
                this.addDepartment(departmentForm);
            }
        }
    }

    private updateDepartment(departmentForm: NgForm) {

        this.spinnerService.updateMessage('Updating Department.....');
        this.spinnerService.busy();
        this.departmentService.updateDepartment(this.departmentModel)
            .subscribe((response: ApiResponse) => {

                var department = this.departments.find(r => r.departmentId == this.departmentModel.departmentId);
                if (null !== department) {
                    department.departmentName = this.departmentModel.departmentName;
                }

                departmentForm.resetForm();
                this.resetAfterDbOperation();
                this.departmentsToDisplay = this.departments.slice();
                this.spinnerService.idle();
                this.toastrNotificationService.success('Department updated successfully');
            },
            error => {
                this.spinnerService.idle();
                console.log('Exception occured while updating department from Database');
            });
    }

    private addDepartment(departmentForm: NgForm) {

        this.spinnerService.updateMessage('Adding Department.....');
        this.spinnerService.busy();
        this.departmentService.addDepartment(this.departmentModel)
            .subscribe((response: ApiResponse) => {

                var newDepartment= new Department(response.data.id, response.data.departmentName);
                this.departments.push(newDepartment);
                this.departmentsToDisplay = this.departments.slice();
                this.resetAfterDbOperation();
                departmentForm.resetForm();
                this.spinnerService.idle();
                this.toastrNotificationService.success('Department added successfully');
            },
            error => {
                this.spinnerService.idle();
                console.log('Exception occured while adding departments to Database');
            });
    }

    editDepartment(department: Department) {
        this.departmentModel = new Department(department.departmentId, department.departmentName);
    }

    resetDepartmentSelection(departmentForm: NgForm) {
        this.resetVariables();
        departmentForm.resetForm();
        this.departmentsToDisplay = this.departments.slice();
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

    deleteDepartment(department: Department) {

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: 'Are you sure you want to delete this record?',
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage('Deleting Department.....');
                        this.spinnerService.busy();
                        this.departmentService.deleteDepartment(department)
                            .subscribe((response: ApiResponse) => {

                                this.departments = this.departments.filter(r => r.departmentId != department.departmentId);
                                this.departmentsToDisplay = this.departments.slice();
                                this.resetAfterDbOperation();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('Department deleted successfully');
                            },
                            error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while deleting departments from Database');
                            });
                    }
                }
            }
        });
    }

    searchDepartment() {
        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.departmentsToDisplay = this.departments.filter(r => r.departmentName.toLocaleLowerCase()
                                            .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.departmentsToDisplay = this.departments.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }

}
