﻿import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Constant } from '../../../shared/constant/constants';
import { FullDonutData } from '../../../shared/models/full-donut/full-donut-data';
import { FormGroup } from '@angular/forms';
import { IterationStateCount } from '../../../shared/models/reports/iteration-state-count';
import { ReportService } from '../../../shared/services/reports/reports-service';
import { ApiResponse } from '../../../shared/models/api-responses/api-response';

@Component({

    selector: 'state-count-summary',
    templateUrl: './state-count-summary-component.html',
    styleUrls: ['./state-count-summary-component.css']
})
export class IterationStateCountSummaryComponent implements OnInit, OnChanges {

    @Input() iteration_state_count: Array<IterationStateCount>;
    @Input() iteration_id: number;
    @Output() iteration_selected = new EventEmitter<number>();
    stateCountDonutData: FullDonutData[] = null;

    constructor(private reportService: ReportService) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.iteration_state_count.currentValue != null) {

            console.log(changes.iteration_state_count.currentValue);
            this.formStateCountDonutData(changes.iteration_state_count.currentValue);
        }
    }

    private formStateCountDonutData(stateCounts){

        this.stateCountDonutData = [];

        for (let state_count of stateCounts) {
            let data: FullDonutData = new FullDonutData();
            data.value = state_count.total;
            data.label = state_count.state;
            this.stateCountDonutData.push(data);
        }
    }

    getStateCountLegendsColor(index: number) {
        let color = ["#003F5C", "#FFA600", "#BC5090", "#FF6361", "#47B39C"];

        return color[index];
    }

    exportIterationStateCountExcel(){

        window.open(`/api/report/export-iteration-state-count/${this.iteration_id}`);
        //this.reportService.exportIterationStateCount(7)
        //    .subscribe((response: ApiResponse) => {


                
        //    },
        //    error => {

        //       console.log('Exception occured exporting iteration state count data');
        //    });
    }
}