import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal-component.html',
    styleUrls: ['./confirm-modal-component.css']
})
export class ConfirmModalComponent implements OnInit {

    promptMessage: string;

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {
    }

    confirm() {
        if (this.bsModalRef.content.callback != null) {
            this.bsModalRef.content.callback(true);
            this.bsModalRef.hide();
        }
    }

    decline() {
        if (this.bsModalRef.content.callback != null) {
            this.bsModalRef.content.callback(false);
            this.bsModalRef.hide();
        }
    }
}