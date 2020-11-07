import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details-component';
import { AuthGuardService } from '../shared/guards/check-user-authenticated-guard';

const userDetailsRoutes: Routes = [
    { path: 'user-details', component: UserDetailsComponent, canActivate: [ AuthGuardService ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(userDetailsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserDetailsRoutingModule {

}