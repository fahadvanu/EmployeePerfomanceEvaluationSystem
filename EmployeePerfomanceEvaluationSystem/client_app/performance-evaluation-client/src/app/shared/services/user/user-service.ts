import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable, forkJoin } from 'rxjs';
import { RoleService } from '../roles/role-service';
import { DepartmentService } from '../departments/departments-service';
import { UserUpdateRequestModel } from '../../models/user/user-update-request-model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/user/get_user', {}, httpOptions);
    }

    getUserDetailScreenData(): Observable<[ApiResponse, ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var userDetailCall = this.http.post<ApiResponse>('/api/user/get_user', {}, httpOptions);
        var rolesCall = this.http.post<ApiResponse>('/api/roles/get_roles', {});
        var departmentCall = this.http.post<ApiResponse>('/api/departments/get_departments', {});

        return forkJoin(userDetailCall, rolesCall, departmentCall);
    }

    updateUserDetails(userUpdateRequestModel: UserUpdateRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/user/update_user', userUpdateRequestModel, httpOptions);
    }
}