import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIterationDetailsComponent } from './employee-iteration-details-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';


const iterationRoutes: Routes = [
    { path: '', component: EmployeeIterationDetailsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(iterationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeIterationDetailsRoutingModule {

}