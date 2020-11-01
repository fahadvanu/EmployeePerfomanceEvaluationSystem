import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable } from 'rxjs';
import { RegistrationRequestModel } from '../../models/accounts/user-registration/registration-request';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    registerUser(registrationRequestModel: RegistrationRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        //let data = {
        //    "userName": registrationRequestModel.userName,
        //    "email":    registrationRequestModel.email,
        //    "password": registrationRequestModel.password,
        //    "firstName": registrationRequestModel.firstName,
        //    "lastName": registrationRequestModel.lastName,
        //    "gender": registrationRequestModel.gender,
        //    "contactNumber": registrationRequestModel.contactNumber,
        //    "roleId": (registrationRequestModel.roleId * 1),
        //    "departmentId": (registrationRequestModel.departmentId * 1),
        //    "reportingManagerId": 0
        //};
        return this.http.post<ApiResponse>('/api/accounts/register',
                                            registrationRequestModel,
                                            httpOptions);
    }

}