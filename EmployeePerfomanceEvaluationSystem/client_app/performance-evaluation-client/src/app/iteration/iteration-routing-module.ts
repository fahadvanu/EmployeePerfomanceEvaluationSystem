import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IterationComponent } from './iteration-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';


const iterationRoutes: Routes = [
    { path: '', component: IterationComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(iterationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class IterationRoutingModule {

}