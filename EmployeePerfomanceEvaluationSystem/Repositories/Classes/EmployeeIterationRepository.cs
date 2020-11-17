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
    public class EmployeeIterationRepository : IEmployeeIterationRepository
    {
        private EmployeePerformaceDbContext _context;

        public EmployeeIterationRepository(EmployeePerformaceDbContext context)
        {
            _context = context;
        }

        public async Task<EmployeeIterationGoals> AddEmployeeIterationGoal(EmployeeIterationGoals employeeIterationGoal)
        {
            _context.EmployeeIterationGoals.Add(employeeIterationGoal);
            await _context.SaveChangesAsync();
            return employeeIterationGoal;
        }

        public async Task<EmployeeIterationGoals> GetEmployeeIterationGoal(int employeeId, int iterationId, int goalId)
        {
            var iterationGoal = await _context.EmployeeIterationGoals.Where(x => x.EmployeeId == employeeId
                                                                                         && x.IterationId == iterationId
                                                                                         && x.GoalId == goalId)
                                                                      .SingleOrDefaultAsync();
            return iterationGoal;
        }

        public async Task<EmployeeIterationState> GetEmployeeIterationState(int employeeId, int iterationId)
        {
            var iterationState = await _context.EmployeeIterationStates.Where(x => x.EmployeeId == employeeId
                                                                               && x.IterationId == iterationId
                                                                            ).SingleOrDefaultAsync();
            return iterationState;
        }

        public async Task UpdateEmployeeIterationState(int employeeId, int iterationId, int iterationStateId, 
                                                       int reportingManagerId)
        {
            var iterationState = await _context.EmployeeIterationStates.Where(x => x.EmployeeId == employeeId
                                                                              && x.IterationId == iterationId)
                                                                      .SingleOrDefaultAsync();

            if(null != iterationState)
            {
                iterationState.IterationStateId = iterationStateId;
            }
            else
            {
                iterationState = new EmployeeIterationState()
                {
                    EmployeeId = employeeId,
                    IterationId = iterationId,
                    IterationStateId = iterationStateId,
                    ReportingManagerId = reportingManagerId
                };

                _context.EmployeeIterationStates.Add(iterationState);
            }

            await _context.SaveChangesAsync();
        }
    }
}
