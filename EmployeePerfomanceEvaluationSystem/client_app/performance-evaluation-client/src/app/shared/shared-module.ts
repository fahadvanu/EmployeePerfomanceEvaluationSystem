import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationPipePipe } from '../shared/pipes/pagination-client';
import { ControlsValueMatchValidator } from './directives/match-controls-directive';
import { HalfDonutDirectiveComponent } from './directives/half-donut/half-donut-directive';
import { FullDonutDirective } from './directives/full-donut/full-donut-directive';

@NgModule({
    declarations: [
        PaginationPipePipe,
        ControlsValueMatchValidator,
        HalfDonutDirectiveComponent,
        FullDonutDirective
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
        ControlsValueMatchValidator,
        HalfDonutDirectiveComponent,
        FullDonutDirective
    ]
})
export class SharedModule {

}