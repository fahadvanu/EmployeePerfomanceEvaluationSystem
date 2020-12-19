import { Component, OnInit } from '@angular/core';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { Constant } from '../shared/constant/constants';
import { EmployeeIterationResultModel } from '../shared/models/set-goals/employee-iteration-result';
import { Rating } from '../shared/models/ratings/rating';

@Component({

    templateUrl: './employee-iteration-result-component.html',
    styleUrls: ['./employee-iteration-result-component.css']

})
export class EmployeeIterationResultComponent implements OnInit {

    loading: boolean = false;
    iteration_state_result_formgroup: FormGroup;
    iterationId: number = 0;
    ratings: Array<Rating>;

    get IterationRatingsControl() {
        return (<FormGroup>this.iteration_state_result_formgroup.controls['iteration_rating']);
    }

    constructor(private iterationService: IterationService,
        private spinnerService: SpinnerService,
        private toastrNotificationService: ToastrNotificationService,
        private iteration_state_result_formbuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.initializeIterationStateResultFormGroup();
        this.getLockedIterations();
    }

    private initializeIterationStateResultFormGroup() {

        this.iteration_state_result_formgroup = this.iteration_state_result_formbuilder.group({

            locked_iteration_group: this.iteration_state_result_formbuilder.group({
                locked_iterations: this.iteration_state_result_formbuilder.array([]),
                selected_iteration: ['']
            }),

            iteration_rating: this.iteration_state_result_formbuilder.group({
                final_rating: [null],
                goal_ratings: this.iteration_state_result_formbuilder.array([])
            })

        });
    }

    private getLockedIterations() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading Locked Iterations.....');
        this.spinnerService.busy();
        this.iterationService.getLockedIterations()
            .subscribe((response: ApiResponse) => {


                let locked_iterations = IterationResponseModel.FormIterationModelArray(response);

                let locked_iteration_form_group = <FormGroup>this.iteration_state_result_formgroup.controls['locked_iteration_group'];
                for (let iteration = 0; iteration < locked_iterations.length; iteration++) {
                    let locked_iteration_form_array = (<FormArray>locked_iteration_form_group.controls['locked_iterations']);
                    locked_iteration_form_array.push(new FormControl(locked_iterations[iteration]));
                }


                console.log(this.iteration_state_result_formgroup.value);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching locked iterations from Database');
            });
    }

    getEmployeeIterationResult(iterationId: number) {

        this.loading = true;
        this.spinnerService.updateMessage('Loading Iteration Result.....');
        this.spinnerService.busy();
        this.iterationService.getEmployeeIterationResult(iterationId)
            .subscribe((responses: Array<ApiResponse>) => {


                if (responses[0].data != null) {
                    this.ratings = Rating.FormRatingModelArray(responses[0]);
                }

                let iterationResult: EmployeeIterationResultModel = null;
                if (responses[1].data != null) {
                    iterationResult = EmployeeIterationResultModel.FormEmployeeIterationResultModel(responses[1], this.ratings);

                    let iteration_rating_formgroup: FormGroup = <FormGroup>this.iteration_state_result_formgroup.controls['iteration_rating'];
                    iteration_rating_formgroup.controls['goal_ratings'] = this.iteration_state_result_formbuilder.array(
                                                                                    iterationResult.goals_ratings
                                                                                                   .slice()
                                                                                                   .map(i =>
                                                                                                       this.iteration_state_result_formbuilder.group(i)
                                                                                                    ));

                    iteration_rating_formgroup.patchValue({
                        final_rating: iterationResult.final_rating
                    });
                }

                console.log(this.iteration_state_result_formgroup.value);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                 this.loading = false;
                 this.spinnerService.idle();
                 console.log('Exception occured while fetching iteration result from Database');
            });
    }
}