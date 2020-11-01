import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationPipePipe } from '../shared/pipes/pagination-client';

@NgModule({
    declarations: [
        PaginationPipePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationPipePipe
    ]
})
export class SharedModule {

}