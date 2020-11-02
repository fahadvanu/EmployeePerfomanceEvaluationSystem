import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration-component';
import { UserLoginComponent } from './user-login/user-login-component';

const accountsModuleRoutes: Routes = [
    { path: 'register', component: UserRegistrationComponent },
    { path: 'login', component: UserLoginComponent }
];

@NgModule({

    imports: [
        RouterModule.forChild(accountsModuleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountsRoutingModule {

}