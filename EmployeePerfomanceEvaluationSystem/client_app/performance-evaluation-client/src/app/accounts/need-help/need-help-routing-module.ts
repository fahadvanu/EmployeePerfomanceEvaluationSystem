import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset-component'
import { UpdatePasswordComponent } from './update-password/update-password-component';

const needHelpModuleRoutes: Routes = [
    { path: 'reset-password', component: PasswordResetComponent },
    { path: 'update-password', component: UpdatePasswordComponent }
];

@NgModule({

    imports: [
        RouterModule.forChild(needHelpModuleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class NeedHelpRoutingModule {

}