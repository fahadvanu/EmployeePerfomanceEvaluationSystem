import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { IterationStateCountReportComponent } from './iteration-state-count/iteration-state-count-report-component';
import { ReportsRoutingModule } from './reports-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        IterationStateCountReportComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        ReportsRoutingModule
    ]
})
export class ReportsModule {

}