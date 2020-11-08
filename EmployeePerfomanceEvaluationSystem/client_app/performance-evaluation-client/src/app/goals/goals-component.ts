import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GoalsService } from '../shared/services/goals/goals-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { Goal } from '../shared/models/goals/goal';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ToastrNotificationService } from '../shared/services/toastr/toastr-service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal-component/confirm-modal-component';

@Component({
    templateUrl: './goals-component.html',
    styleUrls: ['./goals-component.css']
})
export class GoalsComponentComponent implements OnInit {

    goals: Array<Goal> = new Array<Goal>();
    goalsToDisplay: Array<Goal> = new Array<Goal>();
    currentPage: number = 1;
    itemsPerPage: number = 5;
    goalModel: Goal;
    searchTerm: string;
    loading: boolean = false;
    modalRef: BsModalRef;

    constructor(private goalService: GoalsService,
        private spinnerService: SpinnerService,
        private toastrNotificationService: ToastrNotificationService,
        private cdRef: ChangeDetectorRef,
        private modalService: BsModalService) { }

    ngOnInit(): void {
        this.resetVariables();
        this.getGoalsFromDatabase();
    }

    resetVariables() {
        this.goalModel = new Goal(0, '', true);
        this.searchTerm = '';
    }

    private getGoalsFromDatabase() {

        this.loading = true;
        this.spinnerService.updateMessage('Loading Goals.....');
        this.spinnerService.busy();
        this.goalService.getGoals()
            .subscribe((response: ApiResponse) => {

                if (response.data != null) {
                    this.goals = Goal.FormGoalModelArray(response);
                    this.goalsToDisplay = this.goals.slice();
                }
                this.loading = false;
                this.spinnerService.idle();
            },
            error => {

                this.loading = false;
                this.spinnerService.idle();
                console.log('Exception occured while fetching goals from Database');
            });
    }

    pageChanged(event: any) {
        this.currentPage = event.page;
    }

    addUpdateGoal(goalForm: NgForm) {

        if (goalForm.valid) {
            if (this.goalModel.goalId != 0) {
                this.updateGoal(goalForm);
            }
            else {
                this.addGoal(goalForm);
            }
        }
    }

    private updateGoal(goalForm: NgForm) {

        this.spinnerService.updateMessage('Updating Goal.....');
        this.spinnerService.busy();
        this.goalService.updateGoal(this.goalModel)
            .subscribe((response: ApiResponse) => {

                var goal = this.goals.find(r => r.goalId == this.goalModel.goalId);
                if (null !== goal) {
                    goal.goalName = this.goalModel.goalName;
                }

                goalForm.resetForm();
                this.resetAfterDbOperation();
                this.goalsToDisplay = this.goals.slice();
                this.spinnerService.idle();
                this.toastrNotificationService.success('Goal updated successfully');
            },
            error => {
                this.spinnerService.idle();
                console.log('Exception occured while updating goal from Database');
            });
    }

    private addGoal(goalForm: NgForm) {

        this.spinnerService.updateMessage('Adding Goal.....');
        this.spinnerService.busy();
        this.goalService.addGoal(this.goalModel)
            .subscribe((response: ApiResponse) => {

                var newGoal = new Goal(response.data.goalId, response.data.goalName, true);
                this.goals.push(newGoal);
                this.goalsToDisplay = this.goals.slice();
                this.resetAfterDbOperation();
                goalForm.resetForm();
                this.spinnerService.idle();
                this.toastrNotificationService.success('Goal added successfully');
            },
            error => {
                this.spinnerService.idle();
                console.log('Exception occured while adding goals to Database');
           });
    }

    editGoal(goal: Goal) {
        this.goalModel = new Goal(goal.goalId, goal.goalName, true);
    }

    resetGoalSelection(goalForm: NgForm) {
        this.resetVariables();
        goalForm.resetForm();
        this.goalsToDisplay = this.goals.slice();
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

    deleteGoal(goal: Goal) {

        this.modalRef = this.modalService.show(ConfirmModalComponent, {
            initialState: {
                promptMessage: 'Are you sure you want to delete this record?',
                callback: (result) => {
                    if (result) {

                        this.spinnerService.updateMessage('Deleting Goal.....');
                        this.spinnerService.busy();
                        this.goalService.deleteGoal(goal)
                            .subscribe((response: ApiResponse) => {

                                this.goals = this.goals.filter(r => r.goalId != goal.goalId);
                                this.goalsToDisplay = this.goals.slice();
                                this.resetAfterDbOperation();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('Goal deleted successfully');
                            },
                            error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while deleting goals from Database');
                            });
                    }
                }
            }
        });
    }

    searchGoals() {

        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.goalsToDisplay = this.goals.filter(r => r.goalName.toLocaleLowerCase()
                                      .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.goalsToDisplay = this.goals.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }

}
