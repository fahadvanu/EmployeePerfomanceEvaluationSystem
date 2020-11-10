import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { AddReportingManagerRequestComponent } from './add-reporting-manager-requests/new-reporting-manager-request-component';
import { ReportingManagerRoutingModule } from './reporting-request-routing-module';
import { ReportingManagerRequestsComponent } from './view-reporting-manger-requests/reporting-manager-requests-component';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        AddReportingManagerRequestComponent,
        ReportingManagerRequestsComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        ReportingManagerRoutingModule
    ]
})
export class ReportingManagerModule {

}