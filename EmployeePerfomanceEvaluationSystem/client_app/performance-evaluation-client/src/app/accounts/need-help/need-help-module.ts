import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module'
import { PasswordResetComponent } from './password-reset/password-reset-component';
import { NeedHelpRoutingModule } from './need-help-routing-module';
import { UpdatePasswordComponent } from './update-password/update-password-component';


@NgModule({
    declarations: [
        PasswordResetComponent,
        UpdatePasswordComponent
    ],
    imports: [
        SharedModule,
        NeedHelpRoutingModule
    ],
    exports: [
        NeedHelpRoutingModule
    ]
})
export class NeedHelpModule {

}