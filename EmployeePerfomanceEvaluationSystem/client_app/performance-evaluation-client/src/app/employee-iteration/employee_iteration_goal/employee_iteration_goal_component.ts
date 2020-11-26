import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeIterationRatingModel } from '../../shared/models/set-goals/employee_iteration_model';
import { FormGroup } from '@angular/forms';
import { Rating } from '../../shared/models/ratings/rating';
import { EmployeeRatingRequestModel } from '../../shared/models/set-goals/employee-rating-request-model';
import { IterationDetailsResponse } from '../../shared/models/iteration/iteration-details-response';
import { Constant } from '../../shared/constant/constants';

@Component({
    selector:'employee-iteration-goal',
    templateUrl: './employee_iteration_goal_component.html',
    styleUrls: ['./employee_iteration_goal_component.css']
})
export class EmployeeIterationGoalComponent implements OnInit {

    @Input() employeeIterationGoal: FormGroup;
    @Input() iteration: IterationDetailsResponse;
    @Input() ratings: Array<Rating> = new Array<Rating>();
    @Output() saveRating = new EventEmitter<EmployeeRatingRequestModel>();

    constructor() { }

    ngOnInit() {
        console.log(this.employeeIterationGoal);
    }

    saveIterationGoal(goal) {
        console.log(goal);
        let employeeRequestModel: EmployeeRatingRequestModel = this.formEmployeeRequestModel(goal);
        this.saveRating.emit(employeeRequestModel);
    }

    private formEmployeeRequestModel(goal: FormGroup): EmployeeRatingRequestModel {

        let employeeRequestModel: EmployeeRatingRequestModel = new EmployeeRatingRequestModel();
        employeeRequestModel.employeeRatingId = goal.value.employeeRatingId * 1;
        employeeRequestModel.employeeComments = goal.value.employeeComments;
        employeeRequestModel.managerComments = (goal.value.managerComments = '') ? null : goal.value.managerComments ;
        employeeRequestModel.iterationGoalId = goal.value.iterationGoalId * 1;
        employeeRequestModel.managerRatingId = (goal.value.managerRatingId = '') ? null : goal.value.managerRatingId * 1;
        employeeRequestModel.iterationRatingId = goal.value.iterationRatingId * 1;

        return employeeRequestModel;
    }

    setEmployeeRatingWeightage(goal: FormGroup) {

        let ratingWeightage = this.ratings.find(x => x.ratingId == goal.value.employeeRatingId * 1);
        let employeeRatingWeightage = this.percentageOfNumber(ratingWeightage.weightage, 100);
        goal.patchValue({
            employeeRatingWeightage: employeeRatingWeightage
        });
       // console.log(goal.value);
    }

    setManagerRatingWeightage(goal: FormGroup) {

        let ratingWeightage = this.ratings.find(x => x.ratingId == goal.value.managerRatingId * 1);
        let managerRatingWeightage = this.percentageOfNumber(ratingWeightage.weightage, 100);
        goal.patchValue({
            managerRatingWeightage: managerRatingWeightage
        });
    }

    private percentageOfNumber(number, percentage): number {

        return Math.round((number / 100) * percentage);
    }

    isEmployeeSectionDisable(goal: FormGroup) {
        if (goal.value.isManagerRequested)
            return true;

        if (this.iteration.iterationStateId == Constant.ITERATION_STATE.MANAGER_EVALUATION
            || this.iteration.iterationStateId == Constant.ITERATION_STATE.COMPLETED
        ) {
            return true;
        }

        return null;
    }

    isManagerSectionDisable(goal: FormGroup) {
        if (!goal.value.isManagerRequested)
            return true;

        if (   this.iteration.iterationStateId == Constant.ITERATION_STATE.SELF_EVALUATION
            || this.iteration.iterationStateId == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING
            || this.iteration.iterationStateId == Constant.ITERATION_STATE.COMPLETED
        ) {
            return true;
        }

        return null;
    }

    showSaveRatingButton(goal: FormGroup) {

        if (!goal.value.isManagerRequested) {

            if (   this.iteration.iterationStateId == Constant.ITERATION_STATE.MANAGER_EVALUATION
                || this.iteration.iterationStateId == Constant.ITERATION_STATE.COMPLETED
            ) {
                return false;
            }
        }


        if (goal.value.isManagerRequested) {

            if (   this.iteration.iterationStateId == Constant.ITERATION_STATE.SELF_EVALUATION
                || this.iteration.iterationStateId == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING
                || this.iteration.iterationStateId == Constant.ITERATION_STATE.COMPLETED
            ) {
                return false;
            }
        }

        return this.iteration.iterationStateId != Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING
            && this.iteration.iterationStateId != Constant.ITERATION_STATE.COMPLETED;
    }
}