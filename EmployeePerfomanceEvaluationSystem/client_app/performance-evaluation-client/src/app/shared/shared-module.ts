import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationPipePipe } from '../shared/pipes/pagination-client';

@NgModule({
    declarations: [
        PaginationPipePipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FormsModule,
        PaginationPipePipe
    ]
})
export class SharedModule {

}