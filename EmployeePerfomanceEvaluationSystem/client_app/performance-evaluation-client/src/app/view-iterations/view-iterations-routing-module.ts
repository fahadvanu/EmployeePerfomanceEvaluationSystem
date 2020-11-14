import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewIterationsComponent } from './view-iterations-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';

const viewIterationRoutes: Routes = [
    { path: 'active-iterations', component: ViewIterationsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(viewIterationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ViewIterationRoutingModule {

}