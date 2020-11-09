import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { AddReportingManagerRequestComponent } from './add-reporting-manager-requests/new-reporting-manager-request-component';
import { ReportingManagerRoutingModule } from './reporting-request-routing-module';

@NgModule({
    declarations: [
        AddReportingManagerRequestComponent
    ],
    imports: [
        SharedModule,
        ReportingManagerRoutingModule
    ]
})
export class ReportingManagerModule {

}