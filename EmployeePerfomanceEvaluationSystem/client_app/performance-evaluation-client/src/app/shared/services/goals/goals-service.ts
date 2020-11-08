import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-responses/api-response'
import { Observable } from 'rxjs';
import { Goal } from '../../models/goals/goal';

@Injectable({
    providedIn: 'root'
})
export class GoalsService {

    constructor(private http: HttpClient) { }

    getGoals(): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('/api/goals/get_goals', {});
    }

    updateGoal(goal: Goal): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`/api/goals/update_goal/${goal.goalId}`, { goalName: goal.goalName });
    }

    addGoal(goal: Goal): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`/api/goals/add_goal`, { goalName: goal.goalName });
    }

    deleteGoal(goal: Goal): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(`/api/goals/delete_goal/${goal.goalId}`);
    }
}