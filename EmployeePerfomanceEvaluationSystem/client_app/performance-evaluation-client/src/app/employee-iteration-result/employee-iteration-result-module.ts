import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { LockedIterationsComponent } from './locked_iterations/locked-iterations-component';
import { EmployeeIterationGoalResultComponent } from './employee-iteration-goal/employee-iteration-goal-component';
import { EmployeeIterationResultComponent } from './employee-iteration-result-component'
import { EmployeeIterationResultRoutingModule } from './employee-iteration-result-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        LockedIterationsComponent,
        EmployeeIterationGoalResultComponent,
        EmployeeIterationResultComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        EmployeeIterationResultRoutingModule
    ]
})
export class EmployeeIterationResultModule {

}