import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable } from 'rxjs';
import { Department } from '../../models/departments/department';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    constructor(private http: HttpClient) { }

    getDepartments(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('/api/departments/get_departments', {});
    }

    updateDepartment(department: Department): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`/api/departments/update_department/${department.departmentId}`, { departmentName: department.departmentName });
    }

    addDepartment(department: Department): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`/api/departments/add_department`, { departmentName: department.departmentName });
    }

    deleteDepartment(department: Department): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`/api/departments/delete_department/${department.departmentId}`);
    }
}