import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable, forkJoin } from 'rxjs';
import { CreateIterationRequestModelAPI } from '../../models/iteration/create-iteration-request-model';
import { UpdateIterationRequestModel } from '../../models/iteration/update-iteration-request-model';
import { EmployeeRatingRequestModel } from '../../models/set-goals/employee-rating-request-model';

@Injectable({
    providedIn: 'root'
})
export class IterationService {

    constructor(private http: HttpClient) { }

    getIterations(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('/api/iteration/get_iterations', {});
    }

    addNewIteration(iteration: CreateIterationRequestModelAPI): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>(`/api/iteration/new _iteration`, iteration, httpOptions);
    }


    deleteIteration(iterationId: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`/api/iteration/remove_iteration/${iterationId}`);
    }


    updateIteration(iterationId: number, requestModel: UpdateIterationRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>(`/api/iteration/update_iteration/${iterationId}`, requestModel, httpOptions);
    }

    getActiveIterations(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('/api/iteration/active_iterations', {});
    }

    getActiveIterationScreenData(): Observable<[ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var activeIterationCall = this.http.post<ApiResponse>('/api/iteration/active_iterations', {});
        var manager_users_call = this.http.post<ApiResponse>('/api/user/reporting_manager_employees', {});

        return forkJoin(activeIterationCall, manager_users_call);
    }

    setGoalScreenData(reportingUserId: number, iterationId: number): Observable<[ApiResponse, ApiResponse, ApiResponse, ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var reportingUserDetailCall = this.http.post<ApiResponse>(`/api/user/reporting_manager_employee/${reportingUserId}`,
                                                          {}, httpOptions);

        var goalsCall = this.http.post<ApiResponse>('/api/goals/get_goals', {});

        var iterationCall = this.http.post<ApiResponse>(`/api/iteration/get_iteration/${iterationId}`, {});

        var iterationStateCall = this.http.post<ApiResponse>(`/api/employee-iteration/employee-iteration-state/`,
                                                            { employeeId: reportingUserId, iterationId: iterationId },
                                                                                        httpOptions);

        var employeeIterationGoals = this.http.post<ApiResponse>(`/api/employee-iteration/employee-iteration-goals/`,
                                                                 { employeeId: reportingUserId, iterationId: iterationId },
                                                                    httpOptions);

        return forkJoin(reportingUserDetailCall, iterationCall, goalsCall, iterationStateCall, employeeIterationGoals);
    }

    getIterationDetailScreenData(): Observable<[ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var activeIterationCall = this.http.post<ApiResponse>('/api/iteration/active_iterations', {});
        var userDetailCall = this.http.post<ApiResponse>('/api/user/get_user', {}, httpOptions);

        return forkJoin(activeIterationCall, userDetailCall);
    }

    getEmployeeIterationDetails(iterationId: number): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/employee-iteration/employee-iteration-details',
                                            { employeeId: 0, iterationId: iterationId }, httpOptions);
    }

    getEmployeeIterationScreenData(employeeId: number, iterationId: number)
                                   : Observable<[ApiResponse, ApiResponse, ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var employeeIterationDetailCall = this.http.post<ApiResponse>('/api/employee-iteration/employee-iteration-details',
                                                             { employeeId: employeeId, iterationId: iterationId }, httpOptions);

        var userDetailCall = this.http.post<ApiResponse>('/api/user/get_user_by_id', { userId: employeeId }, httpOptions);

        var ratingCall = this.http.post<ApiResponse>('/api/ratings/get_ratings', {}, httpOptions);

        var goal_rating_Call = this.http.post<ApiResponse>('/api/employee-iteration/employee-iteration-ratings',
                                                           { employeeId: employeeId, iterationId: iterationId },
                                                           httpOptions);

        return forkJoin(employeeIterationDetailCall, userDetailCall, ratingCall, goal_rating_Call);
    }

    saveEmployeeRating(employeeRatingRequestModel: EmployeeRatingRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>(`/api/employee-iteration/save-employee-iteration-rating`, employeeRatingRequestModel, httpOptions);
    }

    getEmployeeIterationRatings(iterationId: number, employeeId: number): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/employee-iteration/employee-iteration-ratings',
                                           { employeeId: employeeId, iterationId: iterationId },
                                             httpOptions);
    }

    getLockedIterations(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('/api/iteration/locked_iterations', {});
    }

    getEmployeeIterationResult(iterationId: number): Observable<[ApiResponse, ApiResponse]> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        var ratingCall = this.http.post<ApiResponse>('/api/ratings/get_ratings', {}, httpOptions);

        var iteration_result_Call = this.http.post<ApiResponse>('/api/employee-iteration/employee-iteration-result',
                                                                { iterationId: iterationId },
                                                               httpOptions);

        return forkJoin(ratingCall, iteration_result_Call);

    }
}
