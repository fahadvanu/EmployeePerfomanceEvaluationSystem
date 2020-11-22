import { Component, OnInit } from '@angular/core';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { Constant } from '../shared/constant/constants';
import { UserResponseModel } from '../shared/models/user/user-response-model';
import { Router, ActivatedRoute } from '@angular/router';
import { IterationDetailsResponse } from '../shared/models/iteration/iteration-details-response';

@Component({

    templateUrl: './employee-iteration-component.html',
    styleUrls: ['./employee-iteration-component.css']

})
export class EmployeeIterationComponent implements OnInit {

    loading: boolean = false;
    modalRef: BsModalRef;
    employee_iteration_formgroup: FormGroup;
    employeeId: number = 0;
    iterationId: number = 0;

    constructor(private iterationService: IterationService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService,
                private router: Router,
                private employee_iteration_formbuilder: FormBuilder,
                private route: ActivatedRoute) { }

    ngOnInit() {

        this.initializeUserDetailFormGroup();

        this.route.params.subscribe(params => {
            this.iterationId = params['iterationId'] * 1;
            this.employeeId = params['userId'] * 1;
            this.loadEmployeeIterationComponentData();
        });
    }

    private initializeUserDetailFormGroup() {

        this.employee_iteration_formgroup = this.employee_iteration_formbuilder.group({

            iteration_detail: [ null ],
            employee_detail: [ null ]
        });

    }

    private loadEmployeeIterationComponentData() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading.....');
        this.spinnerService.busy();
        this.iterationService.getEmployeeIterationScreenData(this.iterationId)
            .subscribe((responses: Array<ApiResponse>) => {

                let iteration_detail: IterationDetailsResponse = null;
                if (responses[0].data != null) {
                    iteration_detail = IterationDetailsResponse.FormIterationDetailsModel(responses[0]);
                }

                let employee_detail: UserResponseModel = null;
                if (responses[1].data != null) {
                    employee_detail = UserResponseModel.formUserResponseModel(responses[1]);
                }

                this.employee_iteration_formgroup.patchValue({
                    iteration_detail: iteration_detail,
                    employee_detail: employee_detail
                });

                console.log(this.employee_iteration_formgroup.value);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching employee iteration details from Database');
            });

    }
}