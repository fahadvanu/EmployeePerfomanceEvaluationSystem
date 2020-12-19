import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Rating } from '../../shared/models/ratings/rating';


@Component({
    selector: 'employee-iteration-goal-result',
    templateUrl: './employee-iteration-goal-component.html',
    styleUrls: ['./employee-iteration-goal-component.css']
})
export class EmployeeIterationGoalResultComponent implements OnInit {

    @Input() employeeIterationGoal: FormGroup;
    @Input() ratings: Array<Rating> = new Array<Rating>();

    constructor() { }

    ngOnInit() {
        console.log(this.employeeIterationGoal);
    }

    getRatingDescription(ratingId) {

        let ratingWeightage = this.ratings.find(x => x.ratingId == ratingId * 1);
        return ratingWeightage.ratingName;
    }
}