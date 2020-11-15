import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { SetGoalsComponent } from './set-goals-component';
import { SetGoalsRoutingModule } from './set-goals-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        SetGoalsComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        SetGoalsRoutingModule
    ]
})
export class SetGoalsModule {

}