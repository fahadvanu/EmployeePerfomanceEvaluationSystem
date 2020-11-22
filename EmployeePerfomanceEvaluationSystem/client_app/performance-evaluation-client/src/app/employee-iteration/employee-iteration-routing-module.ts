import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIterationComponent } from './employee-iteration-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';


const employeeIterationRoutes: Routes = [
    { path: 'view-iteration/user/:userId/iteration/:iterationId', component: EmployeeIterationComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(employeeIterationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeIterationRoutingModule {

}