using EmployeePerfomanceEvaluationSystem.Models;
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
    }
}
