import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration-component';


const accountsModuleRoutes: Routes = [
    { path: 'register', component: UserRegistrationComponent }
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