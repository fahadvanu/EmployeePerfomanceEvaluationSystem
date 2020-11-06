import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user-service';
import { SpinnerService } from '../shared/services/spinner/spinner-service';
import { ApiResponse } from '../shared/models/api-responses/api-response';
import { UserResponseModel } from '../shared/models/user/user-response-model';
import { Router } from '@angular/router';

@Component({

    templateUrl: './home-component.html',
    styleUrls: ['./home-component.css']

})
export class HomeComponent implements OnInit {

    userModel: UserResponseModel;
    isLoading: boolean = false;

    constructor(private userService: UserService,
                private spinnerService: SpinnerService,
                private router: Router) { }

    ngOnInit() {

        this.loadUser();
    }

    private loadUser() {

        this.isLoading = true;
        this.spinnerService.updateMessage('Loading User details.....');
        this.spinnerService.busy();

        this.userService.getUser()
            .subscribe((response: ApiResponse) => {

                this.isLoading = false;
                this.spinnerService.idle();
                this.userModel = UserResponseModel.formUserResponseModel(response);
                console.log(this.userModel);
            },
            error => {
                this.isLoading = false;
                this.spinnerService.idle();
                console.log('Error occured while fetching user details');
            })
    }

    navigateEditUserDetailsPage() {
        this.router.navigate(['/user']);
    }
}