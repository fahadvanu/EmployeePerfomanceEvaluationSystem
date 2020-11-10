import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReportingManagerRequestComponent } from './add-reporting-manager-requests/new-reporting-manager-request-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';
import { ReportingManagerRequestsComponent } from './view-reporting-manger-requests/reporting-manager-requests-component';

const reportingManagerRoutes: Routes = [
    { path: 'reporting-manager-request', component: AddReportingManagerRequestComponent, canActivate: [AuthGuardService] },
    { path: 'view-reporting-manager-request', component: ReportingManagerRequestsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
    imports: [
        RouterModule.forChild(reportingManagerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReportingManagerRoutingModule {

}