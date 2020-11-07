import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module'
import { UserRegistrationComponent } from './user-registration/user-registration-component';
import { AccountsRoutingModule } from './accounts-routing-module';
import { UserLoginComponent } from './user-login/user-login-component';


@NgModule({
    declarations: [
        UserRegistrationComponent,
        UserLoginComponent
    ],
    imports: [
        SharedModule,
        AccountsRoutingModule
    ]
})
export class AccountsModule {

}