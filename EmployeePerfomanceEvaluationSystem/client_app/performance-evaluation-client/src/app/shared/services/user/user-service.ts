import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable, forkJoin } from 'rxjs';
import { RoleService } from '../roles/role-service';
import { DepartmentService } from '../departments/departments-service';
import { UserUpdateRequestModel } from '../../models/user/user-update-request-model';
import { ReportingManagerRequest } from '../../models/user/reporting-manager-request-model';
import { ApproveReportingManagerRequestModel } from '../../models/user/approve-reporting-manager-request-model';

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

    getNewRortingManagerRequestScreenData(): Observable<[ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var userDetailCall = this.http.post<ApiResponse>('/api/user/get_user', {}, httpOptions);
        var usersCall = this.http.post<ApiResponse>('/api/user/get_registered_users_except_logged_in_user', {});

        return forkJoin(userDetailCall, usersCall);
    }

    submitUserReportingManagerRequest(reportingManagerRequestModel: ReportingManagerRequest): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/user/reporting_manager_request', reportingManagerRequestModel, httpOptions);
    }

    getPendingReportingManagerRequests(): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/user/pending_reporting_manager_requests', {}, httpOptions);
    }

    approvePendingReportingManagerRequests(request: ApproveReportingManagerRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/user/approve_reporting_manager_request', request, httpOptions);
    }

    rejectPendingReportingManagerRequests(requestId: number): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.delete<ApiResponse>(`/api/user/reject_reporting_manager_requests/${requestId}`);
    }
}