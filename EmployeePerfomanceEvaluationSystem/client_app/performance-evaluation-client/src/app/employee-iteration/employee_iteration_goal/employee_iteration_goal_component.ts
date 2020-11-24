import { Component, OnInit, Input } from '@angular/core';
import { EmployeeIterationRatingModel } from '../../shared/models/set-goals/employee_iteration_model';
import { FormGroup } from '@angular/forms';
import { Rating } from '../../shared/models/ratings/rating';

@Component({
    selector:'employee-iteration-goal',
    templateUrl: './employee_iteration_goal_component.html',
    styleUrls: ['./employee_iteration_goal_component.css']
})
export class EmployeeIterationGoalComponent implements OnInit {

    @Input() employeeIterationGoal: FormGroup;
    @Input() ratings: Array<Rating> = new Array<Rating>();

    constructor() { }

    ngOnInit() {
        console.log(this.employeeIterationGoal);
    }

    saveIterationGoal(goal) {
        console.log(goal);
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
}