import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { ViewIterationsComponent } from './view-iterations-component';
import { ViewIterationRoutingModule } from './view-iterations-routing-module';
import { NgxBootstrapModule } from '../ngx-bootstrap-module'

@NgModule({
    declarations: [
        ViewIterationsComponent
    ],
    imports: [
        SharedModule,
        NgxBootstrapModule,
        ViewIterationRoutingModule
    ]
})
export class ViewIterationsModule {

}