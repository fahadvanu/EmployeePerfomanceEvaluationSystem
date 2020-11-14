import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable, forkJoin } from 'rxjs';
import { CreateIterationRequestModelAPI } from '../../models/iteration/create-iteration-request-model';
import { UpdateIterationRequestModel } from '../../models/iteration/update-iteration-request-model';

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
}