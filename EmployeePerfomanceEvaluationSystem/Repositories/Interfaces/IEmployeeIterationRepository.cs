﻿using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IEmployeeIterationRepository
    {
        Task<EmployeeIterationGoals> AddEmployeeIterationGoal(EmployeeIterationGoals employeeIterationGoal);
        Task<EmployeeIterationGoals> GetEmployeeIterationGoal(int employeeId, int iterationId, int goalId);
        Task<EmployeeIterationState> GetEmployeeIterationState(int employeeId, int iterationId);
        Task UpdateEmployeeIterationState(int employeeId, int iterationId, int iterationStateId, int reportingManagerId);
        Task<List<EmployeeIterationGoalResponse>> GetEmployeeIterationGoals(int employeeId, int iterationId);
        Task<EmployeeIterationGoals> UpdateEmployeeIterationGoal(EmployeeIterationGoals employeeIterationGoal);
        Task<EmployeeIterationGoals> GetEmployeeIterationGoal(int employeeIterationGoalId);
        Task RemoveEmployeeIterationGoal(int employeeIterationGoalId);
        Task<List<EmployeeIterationGoalRatings>> GetEmployeeIterationGoalRatings(int employeeId, int iterationId);
        Task UpsertEmployeeIterationRating(bool isManagerRequested, EmployeeRatingRequestModel employeeRatingRequestModel);
        Task UpdateEmployeeIterationResult(int employeeId, int iterationId, int ratingId);
        Task<EmployeeIterationResult> GetEmployeeIterationResult(int employeeId, int iterationId);
    }
}
