import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable, forkJoin } from 'rxjs';

import { EmployeeIterationGoalRequestModel } from '../../models/set-goals/employee-iteration-goal-request-model';

@Injectable({
    providedIn: 'root'
})
export class SetGoalsService {

    constructor(private http: HttpClient) { }

    addEmployeeIterationGoal(employeeIterationGoalRequestModel: EmployeeIterationGoalRequestModel): Observable<ApiResponse> {

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const httpOptions = {
            headers: headers
        }

        return this.http.post<ApiResponse>('/api/employee-iteration/add-iteration-goal', employeeIterationGoalRequestModel, httpOptions);
    }

}