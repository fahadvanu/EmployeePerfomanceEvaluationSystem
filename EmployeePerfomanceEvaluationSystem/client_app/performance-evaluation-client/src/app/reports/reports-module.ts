import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { IterationStateCountReportComponent } from './iteration-state-count/iteration-state-count-report-component';
import { ActiveIterationsComponent } from './iteration-state-count/active_iterations/active-iterations-component';
import { ReportsRoutingModule } from './reports-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        IterationStateCountReportComponent,
        ActiveIterationsComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        ReportsRoutingModule
    ]
})
export class ReportsModule {

}