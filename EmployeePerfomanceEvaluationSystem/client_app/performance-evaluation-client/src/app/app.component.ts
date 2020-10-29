import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner/spinner-service';

@Component({
  selector: 'app-root',
  templateUrl:'app-component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {

    messageToDisplay: string = 'Loading...';
    constructor(private spinnerService: SpinnerService) { }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.spinnerService.messageObservable.subscribe(message => {
                this.messageToDisplay = message;
            });
        });
    }
}
