import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    exports: [
        PaginationModule,
        ModalModule,
        BsDatepickerModule
    ]
})
export class NgxBootstrapModule {

}