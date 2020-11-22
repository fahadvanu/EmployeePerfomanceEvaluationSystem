import { Component, OnInit, Input } from '@angular/core';
import { UserResponseModel } from '../../shared/models/user/user-response-model';

@Component({

    selector: 'employee-details',
    templateUrl: './employee-details-component.html',
    styleUrls: ['./employee-details-component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    @Input() employee: UserResponseModel;

    constructor() { }

    ngOnInit() { }
}