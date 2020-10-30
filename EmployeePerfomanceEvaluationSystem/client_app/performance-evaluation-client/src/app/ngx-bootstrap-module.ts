import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        PaginationModule.forRoot(),
        ModalModule.forRoot()
    ],
    exports: [
        PaginationModule,
        ModalModule
    ]
})
export class NgxBootstrapModule {

}