﻿import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ToastrNotificationService {

    constructor(private toastrService: ToastrService) { }

    success(message: string) {
        this.toastrService.success(message);
    }

    failed(message: string) {
        this.toastrService.error(message);
    }

    warning(message: string) {
        this.toastrService.warning(message);
    }
}