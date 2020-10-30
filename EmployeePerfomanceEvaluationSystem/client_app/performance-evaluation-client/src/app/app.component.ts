import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './shared/services/spinner/spinner-service';

@Component({
  selector: 'app-root',
  templateUrl:'app-component.html',
  styles: []
})
export class AppComponent implements OnInit {

    messageToDisplay: string = 'Loading...';
    constructor(private spinnerService: SpinnerService,
                private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        
        this.spinnerService.messageObservable.subscribe(message => {
            setTimeout(() => {

                this.messageToDisplay = message;
                this.cdRef.detectChanges();

            },0);
       });
       
       
    }
}
