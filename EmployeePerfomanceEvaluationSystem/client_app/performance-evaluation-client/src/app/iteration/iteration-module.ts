import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { IterationComponent } from './iteration-component';
import { IterationRoutingModule } from './iteration-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        IterationComponent
    ],
    imports: [

        SharedModule,
        NgxBootstrapModule,
        IterationRoutingModule
    ]
})
export class IterationModule {

}