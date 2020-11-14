import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegistrationRequestModel } from '../../models/accounts/user-registration/registration-request';
import { LoginRequestModel } from '../../models/accounts/user-login/login-request-model';
import { Constant } from '../../constant/constants';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decode } from 'punycode';
import { PasswordResetRequestModel } from '../../models/accounts/need-help/password-reset/password-reset-request-model';
import { UpdatePasswordRequestModel } from '../../models/accounts/need-help/update-password/update-password-request-model';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    private loggedIn = new BehaviorSubject<boolean>(false);

    isLoggedInObservable() {
        return this.loggedIn.asObservable();
    }

    registerUser(registrationRequestModel: RegistrationRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/accounts/register',
                                            registrationRequestModel,
                                            httpOptions);
    }

    loginUser(loginRequestModel: LoginRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/accounts/login', loginRequestModel, httpOptions)
                    .pipe(
                        map((response: ApiResponse) => {

                            this.saveTokenToStorage(response);
                            return response;
                        })
                    );

    }

    passwordReset(passwordResetRequestModel: PasswordResetRequestModel ): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/accounts/reset_password_link', passwordResetRequestModel, httpOptions);
    }

    updatePassword(updatepasswordResetRequestModel: UpdatePasswordRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/accounts/update_password', updatepasswordResetRequestModel, httpOptions);
    }

    private saveTokenToStorage(response: ApiResponse) {
        if (response.data != null) {
            localStorage.setItem(Constant.JWT_TOKEN_KEY, response.data.token);
            this.loggedIn.next(true);
        }
    }

    removeTokenFromStorage() {
        localStorage.removeItem(Constant.JWT_TOKEN_KEY);
        this.loggedIn.next(false);
    }

    private getTokenFromStorage() {
        return localStorage.getItem(Constant.JWT_TOKEN_KEY);
    }

    getUserName() {

        let token = this.getTokenFromStorage();
        if (token != null) {
            const helper = new JwtHelperService();
            let decodedToken: any = helper.decodeToken(token);
            if (decodedToken != null) {
                this.loggedIn.next(true);
                return decodedToken.UserName;
            }
        }
    }

    isAuthenticated() {
        let token = this.getTokenFromStorage();
        if (token == null) {
            return false;
        }

        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        const isExpired = helper.isTokenExpired(token);
        return !isExpired;
    }

    isAdminUser() {

        let token = this.getTokenFromStorage();
        if (token != null) {
            const helper = new JwtHelperService();
            let decodedToken: any = helper.decodeToken(token);
            if (decodedToken != null) {
                this.loggedIn.next(true);
                return (decodedToken.IsAdmin == 'True');
            }
        }
    }

    isManager() {

        let token = this.getTokenFromStorage();
        if (token != null) {
            const helper = new JwtHelperService();
            let decodedToken: any = helper.decodeToken(token);
            if (decodedToken != null) {
                this.loggedIn.next(true);
                return (decodedToken.RoleId == Constant.MANAGER_ROLE_ID);
            }
        }
    }
}