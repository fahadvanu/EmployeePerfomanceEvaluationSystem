﻿import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { EmployeeIterationComponent } from './employee-iteration-component';
import { EmployeeDetailsComponent } from './employee-details/employee-details-display-component';
import { IterationDetailsComponent } from './iteration-details/iteration-details-component';
import { EmployeeIterationRoutingModule } from './employee-iteration-routing-module';
import { EmployeeIterationGoalComponent } from './employee_iteration_goal/employee_iteration_goal_component';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        EmployeeIterationComponent,
        EmployeeDetailsComponent,
        IterationDetailsComponent,
        EmployeeIterationGoalComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        EmployeeIterationRoutingModule
    ]
})
export class EmployeeIterationModule {

}