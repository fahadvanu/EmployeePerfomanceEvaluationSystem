import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module'
import { UserRegistrationComponent } from './user-registration/user-registration-component';
import { AccountsRoutingModule } from './accounts-routing-module';


@NgModule({
    declarations: [
        UserRegistrationComponent
    ],
    imports: [
        SharedModule,
        AccountsRoutingModule
    ],
    exports: [
        AccountsRoutingModule
    ]
})
export class AccountsModule {

}