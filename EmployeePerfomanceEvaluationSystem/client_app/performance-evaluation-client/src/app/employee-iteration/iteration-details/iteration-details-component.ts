import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IterationDetailsResponse } from '../../shared/models/iteration/iteration-details-response';
import { Constant } from '../../shared/constant/constants';
import { IterationStatus } from '../../shared/models/iteration/iteration-reponse-model';

@Component({

    selector: 'iteration-details',
    templateUrl: './iteration-details-component.html',
    styleUrls: ['./iteration-details-component.css']
})
export class IterationDetailsComponent implements OnInit, OnChanges {

    @Input() iteration: IterationDetailsResponse;
    iterationStepCompleted: number = 0;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.iteration.currentValue != null) {
            this.formIterationStepCompleted(changes.iteration.currentValue.iterationStateId);
        }

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

    getIterationState(state: number) {

        if (state == Constant.ITERATION_STATE.NOT_STARTED)
            return Constant.NOT_STARTED;

        if (state == Constant.ITERATION_STATE.SET_GOALS)
            return Constant.SET_GOALS;

        if (state == Constant.ITERATION_STATE.SELF_EVALUATION)
            return Constant.EMPLOYEE_EVALUATION;

        if (state == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return Constant.MANAGER_EVALUATION;

        if (state == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return Constant.REVIEW_METTING;

        if (state == Constant.ITERATION_STATE.COMPLETED)
            return Constant.COMPLETE;
    }

    getStepsCompleted(state: number) {


        if (state == Constant.ITERATION_STATE.NOT_STARTED)
            return 0;

        if (state == Constant.ITERATION_STATE.SET_GOALS)
            return 0;

        if (state == Constant.ITERATION_STATE.SELF_EVALUATION)
            return 1;

        if (state == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return 2;

        if (state == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return 3;

        if (state == Constant.ITERATION_STATE.COMPLETED)
            return 4;
    }

    private formIterationStepCompleted(iterationStateId) {

        if (iterationStateId == Constant.ITERATION_STATE.NOT_STARTED)
            this.iterationStepCompleted = 0;

        if (iterationStateId == Constant.ITERATION_STATE.SET_GOALS)
            this.iterationStepCompleted = 0;

        if (iterationStateId == Constant.ITERATION_STATE.SELF_EVALUATION)
            this.iterationStepCompleted = 25;

        if (iterationStateId == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            this.iterationStepCompleted = 50;

        if (iterationStateId == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            this.iterationStepCompleted = 75;

        if (iterationStateId == Constant.ITERATION_STATE.COMPLETED)
            this.iterationStepCompleted = 100;

    }
}