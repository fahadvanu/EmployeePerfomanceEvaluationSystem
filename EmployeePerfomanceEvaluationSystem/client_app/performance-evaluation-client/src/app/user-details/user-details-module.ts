import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { UserDetailsComponent } from './user-details-component';
import { UserDetailsRoutingModule } from './user-details-routing-module';

@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        SharedModule,
        UserDetailsRoutingModule
    ]
})
export class UserDetailsModule {

}