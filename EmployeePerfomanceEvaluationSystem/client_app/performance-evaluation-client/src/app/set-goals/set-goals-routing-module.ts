import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetGoalsComponent } from './set-goals-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';

const setGoalsRoutes: Routes = [
    { path: 'set-goals/:user/:iteration', component: SetGoalsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(setGoalsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SetGoalsRoutingModule {

}