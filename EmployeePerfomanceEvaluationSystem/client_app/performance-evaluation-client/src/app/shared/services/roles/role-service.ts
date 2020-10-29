import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable } from 'rxjs';
import { Role } from '../../models/roles/role';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private http: HttpClient) { }

    getRoles(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('/api/roles/get_roles', {});
    }

    updateRole(role: Role): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`/api/roles/update_role/${role.roleId}`, { roleName: role.roleName });
    }

    addRole(role: Role): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`/api/roles/add_role`, { roleName: role.roleName });
    }

    deleteRole(role: Role): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`/api/roles/delete_role/${role.roleId}`);
    }
}