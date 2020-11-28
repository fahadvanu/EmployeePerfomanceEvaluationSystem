import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IterationStateCountReportComponent } from './iteration-state-count/iteration-state-count-report-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';


const reportsRoutes: Routes = [
    {
        path: 'reports/iteration-state',
        component: IterationStateCountReportComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reportsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReportsRoutingModule {

}