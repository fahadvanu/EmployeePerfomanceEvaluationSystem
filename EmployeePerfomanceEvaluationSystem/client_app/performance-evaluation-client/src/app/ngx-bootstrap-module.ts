import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ProgressbarModule.forRoot()
    ],
    exports: [
        PaginationModule,
        ModalModule,
        BsDatepickerModule,
        ProgressbarModule
    ]
})
export class NgxBootstrapModule {

}