import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { EmployeeIterationDetailsComponent } from './employee-iteration-details-component';
import { EmployeeIterationDetailsRoutingModule } from './employee-iteration-details-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        EmployeeIterationDetailsComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        EmployeeIterationDetailsRoutingModule
    ]
})
export class EmployeeIterationDetailsModule {

}