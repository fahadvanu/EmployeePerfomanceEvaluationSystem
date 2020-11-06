import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable } from 'rxjs';


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

   
}