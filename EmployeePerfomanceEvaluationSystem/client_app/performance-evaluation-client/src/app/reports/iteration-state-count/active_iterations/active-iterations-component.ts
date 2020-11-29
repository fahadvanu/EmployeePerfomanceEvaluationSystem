import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IterationResponseModel, IterationStatus } from '../../../shared/models/iteration/iteration-reponse-model';
import { Constant } from '../../../shared/constant/constants';
import { FormGroup } from '@angular/forms';

@Component({

    selector: 'active-iterations',
    templateUrl: './active-iterations-component.html',
    styleUrls: ['./active-iterations-component.css']
})
export class ActiveIterationsComponent implements OnInit {

    @Input() active_iteration_group: FormGroup;
    @Output() iteration_selected = new EventEmitter<number>();
    selectedReviewPeriodDetail: IterationResponseModel;

    constructor() { }

    ngOnInit() { }

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

    displayIterationDetails() {
        console.log(this.active_iteration_group.value);
        this.selectedReviewPeriodDetail = this.active_iteration_group.value.active_iterations.find(x => x.iterationId ==
                                                (this.active_iteration_group.value.selected_iteration * 1));

        this.iteration_selected.emit(this.active_iteration_group.value.selected_iteration * 1);
    }
}