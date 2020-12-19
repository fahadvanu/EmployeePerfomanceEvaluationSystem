import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIterationResultComponent } from './employee-iteration-result-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';


const employeeIterationResultRoutes: Routes = [
    { path: '', component: EmployeeIterationResultComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(employeeIterationResultRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeIterationResultRoutingModule {

}