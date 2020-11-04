import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationPipePipe } from '../shared/pipes/pagination-client';
import { ControlsValueMatchValidator } from './directives/match-controls-directive';

@NgModule({
    declarations: [
        PaginationPipePipe,
        ControlsValueMatchValidator
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
        PaginationPipePipe,
        ControlsValueMatchValidator
    ]
})
export class SharedModule {

}