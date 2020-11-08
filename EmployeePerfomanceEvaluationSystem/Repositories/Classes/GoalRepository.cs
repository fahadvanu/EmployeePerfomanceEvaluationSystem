using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Classes
{
    public class GoalRepository : IGoalsRepository
    {
        private EmployeePerformaceDbContext _context;

        public GoalRepository(EmployeePerformaceDbContext context)
        {
            _context = context;
        }

        public async Task<Goal> AddGoal(Goal goal)
        {
            _context.Goals.Add(goal);
            await _context.SaveChangesAsync();
            return goal;
        }

        public async Task DeleteGoal(int goalId)
        {
            var existingGoal = await _context.Goals.SingleOrDefaultAsync(x => x.GoalId == goalId && x.IsActive);
            if (null != existingGoal)
            {
                existingGoal.IsActive = false;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Goal> GetGoal(int goalId)
        {
            return await _context.Goals.SingleOrDefaultAsync(x => x.GoalId == goalId && x.IsActive);
        }

        public async Task<List<Goal>> GetGoals()
        {
            return await _context.Goals.Where(x => x.IsActive).ToListAsync();
        }

        public async Task<bool> GoalExists(string goalName)
        {
            var exisitingGoal = await _context.Goals.SingleOrDefaultAsync(r => r.GoalName.Trim().ToLower()
                                                                            == goalName.Trim().ToLower());
            return exisitingGoal != null;
        }

        public async Task UpdateGoal(int goalId, string goalName)
        {
            var existingGoal = await _context.Goals.SingleOrDefaultAsync(x => x.GoalId == goalId && x.IsActive);
            if (null != existingGoal)
            {
                existingGoal.GoalName = goalName;
                await _context.SaveChangesAsync();
            }
        }
    }
}
