import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable } from 'rxjs';
import { CreateIterationRequestModelAPI } from '../../models/iteration/create-iteration-request-model';

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
}