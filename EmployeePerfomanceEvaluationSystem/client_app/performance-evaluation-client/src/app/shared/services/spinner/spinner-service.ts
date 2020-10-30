import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class SpinnerService {

    constructor(private spinnerService: NgxSpinnerService) {

    }

    private messageBehaviour = new BehaviorSubject<string>('Loading...');
    messageObservable = this.messageBehaviour.asObservable();


    updateMessage(message: string) {
        this.messageBehaviour.next(message);
    }

    busy(message: string = 'Loading....') {
        this.spinnerService.show(undefined, {
            type: 'square-spin',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            size:'medium'
        });
    }

    idle() {
        this.spinnerService.hide();
    }
}