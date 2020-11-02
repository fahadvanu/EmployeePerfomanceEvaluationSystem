import { Component, OnInit } from '@angular/core';
import { LoginRequestModel } from '../../shared/models/accounts/user-login/login-request-model';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../shared/services/accounts/accounts-service';
import { SpinnerService } from '../../shared/services/spinner/spinner-service';
import { ApiResponse } from '../../shared/models/api-responses/api-response';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user-login-component.html',
    styleUrls: ['./user-login-component.css']
})
export class UserLoginComponent implements OnInit {

    loginModel: LoginRequestModel = new LoginRequestModel();

    constructor(private accountService: AccountService,
                private spinnerService: SpinnerService,
                private router: Router) {

    }

    ngOnInit() {
        this.accountService.removeTokenFromStorage();
    }

    loginUser(loginForm: NgForm) {
        if (loginForm.valid) {

            this.spinnerService.updateMessage('Processing Login request. Please wait.....');
            this.spinnerService.busy();
            this.accountService.loginUser(this.loginModel)
                .subscribe((response: ApiResponse) => {

                    this.spinnerService.idle();
                    console.log(response);
                    if (response.data != null) {
                        this.router.navigate(['/home']);
                    }

                },
                error => {
                    this.spinnerService.idle();
                    console.log('Exception occured while processing login request');
               });
        }
    }
}