import { Component, OnInit } from '@angular/core';
import { IterationService } from '../../shared/services/iteration/iteration-service';
import { ApiResponse } from '../../shared/models/api-responses/api-response';
import { IterationResponseModel, IterationStatus } from '../../shared/models/iteration/iteration-reponse-model';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { SpinnerService } from '../../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../confirm-modal-component/confirm-modal-component';
import { Constant } from '../../shared/constant/constants';
import { ReportService } from '../../shared/services/reports/reports-service';
import { IterationStateCount } from '../../shared/models/reports/iteration-state-count';

@Component({

    templateUrl: './iteration-state-count-report-component.html',
    styleUrls: ['./iteration-state-count-report-component.css']

})
export class IterationStateCountReportComponent implements OnInit {

    loading: boolean = false;
    modalRef: BsModalRef;
    iteration_state_report_formgroup: FormGroup;
    iterationId: number = 0;

    get IterationStateCountControl()  {
        return(<FormGroup> this.iteration_state_report_formgroup.controls['iteration_state_count_form_group']).controls['iteration_state_count'];
    }

    constructor(private iterationService: IterationService,
                private reportService: ReportService,
                private spinnerService: SpinnerService,
                private toastrNotificationService: ToastrNotificationService,
                private modalService: BsModalService,
                private iteration_state_report_formbuilder: FormBuilder
               ) { }

    ngOnInit() {

        this.initializeIterationStateReportFormGroup();
        this.getActiveIterations();
    }

    private initializeIterationStateReportFormGroup() {

        this.iteration_state_report_formgroup = this.iteration_state_report_formbuilder.group({

            active_iteration_group: this.iteration_state_report_formbuilder.group({
                active_iterations: this.iteration_state_report_formbuilder.array([]),
                selected_iteration: ['']
            }),

            iteration_state_count_form_group: this.iteration_state_report_formbuilder.group({
                 iteration_state_count: this.iteration_state_report_formbuilder.array([])
            })
           
        });
    }

    private getActiveIterations() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading.....');
        this.spinnerService.busy();
        this.iterationService.getActiveIterations()
            .subscribe((response: ApiResponse) => {


                let active_iterations = IterationResponseModel.FormIterationModelArray(response);

                let active_iteration_form_group = <FormGroup>this.iteration_state_report_formgroup.controls['active_iteration_group'];
                for (let iteration = 0; iteration < active_iterations.length; iteration++) {
                    let active_iteration_form_array = (<FormArray>active_iteration_form_group.controls['active_iterations']);
                    active_iteration_form_array.push(new FormControl(active_iterations[iteration]));
                }
                

                //this.iteration_state_report_formgroup.updateValueAndValidity();
                console.log(this.iteration_state_report_formgroup.value);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching active iterations from Database');
           });
    }

    getIterationStateCountReport(iterationId: number) {

        this.spinnerService.updateMessage('Fetching iteration state count details.....');
        this.spinnerService.busy();
        this.reportService.iterationStateCount(iterationId)
            .subscribe((response: ApiResponse) => {


                let iteration_states_count = IterationStateCount.FormIterationStateCountModelArray(response);
                console.log(iteration_states_count);
                let iteration_state_count_form_group = <FormGroup>this.iteration_state_report_formgroup.controls['iteration_state_count_form_group'];
                iteration_state_count_form_group.reset();
                let countArray = (<FormArray>iteration_state_count_form_group.controls['iteration_state_count']);
                this.clearFormArray(countArray);

                for (let iteration = 0; iteration < iteration_states_count.length; iteration++) {
                    let iteration_state_count_form_array = (<FormArray>iteration_state_count_form_group.controls['iteration_state_count']);
                    iteration_state_count_form_array.push(new FormControl(iteration_states_count[iteration]));
                }


                //this.iteration_state_report_formgroup.updateValueAndValidity();
                console.log(this.iteration_state_report_formgroup.value);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching iteration state count report from Database');
            });
    }

    private clearFormArray = (formArray: FormArray) => {

        while (formArray.length !== 0) {
            formArray.removeAt(0)
        }
    }
}