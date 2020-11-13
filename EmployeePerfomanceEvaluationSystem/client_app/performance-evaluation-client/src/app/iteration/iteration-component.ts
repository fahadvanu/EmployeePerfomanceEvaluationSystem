import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IterationService } from '../shared/services/iteration/iteration-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { IterationResponseModel, IterationStatus } from '../shared/models/iteration/iteration-reponse-model';
import { CreateIterationRequestModel, CreateIterationRequestModelAPI } from '../shared/models/iteration/create-iteration-request-model';
import { UpdateIterationRequestModel } from '../shared/models/iteration/update-iteration-request-model';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';
import { Constant } from '../shared/constant/constants';

@Component({
    templateUrl: './iteration-component.html',
    styleUrls: ['./iteration-component.css']
})
export class IterationComponent implements OnInit {

    iterations: Array<IterationResponseModel> = new Array<IterationResponseModel>();
    iterationsToDisplay: Array<IterationResponseModel> = new Array<IterationResponseModel>();
    currentPage: number = 1;
    itemsPerPage: number = 5;
    searchTerm: string;
    loading: boolean = false;
    modalRef: BsModalRef;
    iteration_model: CreateIterationRequestModel = new CreateIterationRequestModel();

    constructor(private iterationService: IterationService,
        private spinnerService: SpinnerService,
        private toastrNotificationService: ToastrNotificationService,
        private cdRef: ChangeDetectorRef,
        private modalService: BsModalService) { }

    ngOnInit(): void {
        this.resetVariables();
        this.getIterationsFromDatabase();
    }

    resetVariables() {
        this.searchTerm = '';
    }

    private getIterationsFromDatabase() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading iterations.....');
        this.spinnerService.busy();
        this.iterationService.getIterations()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.iterations = IterationResponseModel.FormIterationModelArray(response);
                    this.iterationsToDisplay = this.iterations.slice();
                }
               // console.log(this.iterations);
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching iterations from Database');
            });
    }

    createIteration(iterationForm: NgForm) {

        if (iterationForm.valid && this.validStartAndEndDate()) {

            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Are you sure you want to create new iteration?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Creating new iteration.....');
                            this.spinnerService.busy();
                            let request: CreateIterationRequestModelAPI = this.mapCreateIterationRequest();
                            

                            this.iterationService.addNewIteration(request)
                                .subscribe((response: ApiResponse) => {

                                    this.getIterationsAfterUpdate('New iteration created successfully');
                                    iterationForm.reset();
                                },
                                error => {

                                    this.spinnerService.idle();
                                    console.log('Exception occured while creating new iteration');

                                });
                        }
                    }
                }
            });
        }       
    }

    private getIterationsAfterUpdate(message: string) {

        this.iterationService.getIterations()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.iterations = IterationResponseModel.FormIterationModelArray(response);
                    this.iterationsToDisplay = this.iterations.slice();
                }

                this.resetAfterDbOperation();
                this.spinnerService.idle();
                this.toastrNotificationService.success(message);
            },
            error => {

                this.spinnerService.idle();
                console.log('Exception occured getIterationsAfterUpdate()');
           });
    }

    private mapCreateIterationRequest(): CreateIterationRequestModelAPI {

        let request: CreateIterationRequestModelAPI = new CreateIterationRequestModelAPI();
        request.title = this.iteration_model.title;
        request.startDate = new Date(this.iteration_model.startDate.getTime() - (this.iteration_model.startDate.getTimezoneOffset() * 60000)).toJSON();
        request.endDate = new Date(this.iteration_model.endDate.getTime() - (this.iteration_model.endDate.getTimezoneOffset() * 60000)).toJSON();

        return request;
    }

    private validStartAndEndDate() {

        if (this.iteration_model.startDate > this.iteration_model.endDate) {
            this.toastrNotificationService.warning("Start date cannot be greater than end date");
            return false;
        }

        let months = this.monthDiff(this.iteration_model.startDate, this.iteration_model.endDate);
        if (months != 6) {
            this.toastrNotificationService.warning("Start date and end date should have difference of 6 months");
            return false;
        }
        return true;
    }

    private monthDiff(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months + 1;
    }

    pageChanged(event: any) {
        this.currentPage = event.page;
    }

    searchIterations() {

        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {

            this.iterationsToDisplay = this.iterations.filter(r => r.title.toLocaleLowerCase()
                                                      .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {

            this.iterationsToDisplay = this.iterations.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }

    private resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
        this.iteration_model = new CreateIterationRequestModel();
    }

    getIterationStatus(status: number) {

        if (status == IterationStatus.NOTACTIVE)
            return Constant.NOTACTIVE;

        if (status == IterationStatus.ACTIVE)
            return Constant.ACTIVE_ITERATION;

        if (status == IterationStatus.DELETED)
            return Constant.DELETED;

        if (status == IterationStatus.LOCKED)
            return Constant.LOCKED;
    }

    deleteIteration(iteration: IterationResponseModel) {
       
            this.modalRef = this.modalService.show(ConfirmModalComponent, {
                initialState: {
                    promptMessage: 'Are you sure you want to delete iteration?',
                    callback: (result) => {
                        if (result) {

                            this.spinnerService.updateMessage('Deleting iteration.....');
                            this.spinnerService.busy();

                            this.iterationService.deleteIteration(iteration.iterationId)
                                .subscribe((response: ApiResponse) => {

                                    this.getIterationsAfterUpdate('Iteration deleted successfully');
   
                                },
                                error => {

                                    this.spinnerService.idle();
                                    console.log('Exception occured while deleting iteration');

                                });
                        }
                    }
                }
            });            

    }

    updateIteration(iteration: IterationResponseModel) {

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: this.getUpdateIterationPromptMessage(iteration),
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage('Updating iteration.....');
                        this.spinnerService.busy();
                        let requestModel: UpdateIterationRequestModel = this.getUpdateIterationRequestModel(iteration);

                        this.iterationService.updateIteration(iteration.iterationId, requestModel)
                            .subscribe((response: ApiResponse) => {

                                this.getIterationsAfterUpdate('Iteration updated successfully');

                            },
                            error => {

                                this.spinnerService.idle();
                                console.log('Exception occured while updating iteration');
                           });
                    }
                }
            }
        });
    }

    private getUpdateIterationPromptMessage(iteration: IterationResponseModel): string {

        let message = "";

        if (iteration.status == IterationStatus.NOTACTIVE)
            message = "Are you sure you want to Activate iteration?";

        if (iteration.status == IterationStatus.ACTIVE)
            message = "Are you sure you want to Locked iteration?";

        return message;
    }

    private getUpdateIterationRequestModel(iteration: IterationResponseModel): UpdateIterationRequestModel {

        let requestModel: UpdateIterationRequestModel = new UpdateIterationRequestModel();

        if (iteration.status == IterationStatus.NOTACTIVE)
            requestModel.newStatus = IterationStatus.ACTIVE;

        if (iteration.status == IterationStatus.ACTIVE)
            requestModel.newStatus = IterationStatus.LOCKED;


        return requestModel;
    }
}