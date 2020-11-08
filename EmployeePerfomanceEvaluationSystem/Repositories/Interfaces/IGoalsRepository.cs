using EmployeePerfomanceEvaluationSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IGoalsRepository
    {
        Task<List<Goal>> GetGoals();
        Task<Goal> AddGoal(Goal goal);
        Task UpdateGoal(int goalId, string goalName);
        Task DeleteGoal(int goalId);
        Task<Goal> GetGoal(int goalId);
        Task<bool> GoalExists(string goalName);
    }
}
