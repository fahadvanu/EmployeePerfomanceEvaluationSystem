using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration;
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

        public async Task<EmployeeIterationGoals> GetEmployeeIterationGoal(int employeeIterationGoalId)
        {
            var iterationGoal = await _context.EmployeeIterationGoals.Where(x => x.Id == employeeIterationGoalId)
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

        public async Task<List<EmployeeIterationGoalResponse>> GetEmployeeIterationGoals(int employeeId, int iterationId)
        {

            var employee_iteration_goals = await _context.EmployeeIterationGoals
                                                         .Where(i => i.EmployeeId == employeeId && i.IterationId == iterationId)
                                                         .Include(x => x.Goal)
                                                         .Select(y => new EmployeeIterationGoalResponse
                                                         {
                                                             Id = y.Id,
                                                             EmployeeId = y.EmployeeId,
                                                             ReportingManagerId = y.ReportingManagerId,
                                                             IterationId = y.IterationId,
                                                             GoalId = y.GoalId,
                                                             GoalTitle = y.Goal.GoalName,
                                                             Description = y.Description,
                                                             Weightage = y.Weightage,
                                                             LastUpdated = y.CreatedDate

                                                         }).ToListAsync();

            return employee_iteration_goals;
        }

        public async Task<EmployeeIterationGoals> UpdateEmployeeIterationGoal(EmployeeIterationGoals employeeIterationGoal)
        {
            var iterationGoal = await _context.EmployeeIterationGoals.Where(x => x.Id == employeeIterationGoal.Id)
                                                                      .SingleOrDefaultAsync();
            iterationGoal.Weightage = employeeIterationGoal.Weightage;
            iterationGoal.Description = employeeIterationGoal.Description;
            await _context.SaveChangesAsync();
            return iterationGoal;
        }

        public async Task RemoveEmployeeIterationGoal(int employeeIterationGoalId)
        {
            var iterationGoal = await _context.EmployeeIterationGoals.Where(x => x.Id == employeeIterationGoalId)
                                                                      .SingleOrDefaultAsync();
            _context.EmployeeIterationGoals.Remove(iterationGoal);
            await _context.SaveChangesAsync();
        }

        public async Task<List<EmployeeIterationGoalRatings>> GetEmployeeIterationGoalRatings(int employeeId, int iterationId)
        {

            var employee_iteration_ratings = await 
                                                (  from iteration_goals in _context.EmployeeIterationGoals.Include(x => x.Goal)
                                                   join iteration_ratings in _context.EmployeeIterationRatings
                                                   on   iteration_goals.Id equals iteration_ratings.IterationGoalId into eg
                                                   from rating in eg.DefaultIfEmpty()
                                                   where iteration_goals.IterationId == iterationId 
                                                         && iteration_goals.EmployeeId == employeeId
                                                    select new EmployeeIterationGoalRatings
                                                    {
                                                        IterationGoalId = iteration_goals.Id,
                                                        GoalTitle = iteration_goals.Goal.GoalName,
                                                        Weightage = iteration_goals.Weightage,
                                                        Description = iteration_goals.Description,
                                                        IterationRatingId = (rating == null) ? null : (int?)rating.Id,
                                                        EmployeeRatingId = (rating == null) ? null : (int?)rating.EmployeeRatingId,
                                                        EmployeeComments = (rating == null) ? null : rating.EmployeeComment,
                                                        ManagerRatingId = (rating == null) ? null : (int?)rating.ManagerRatingId,
                                                        ManagerComments = (rating == null) ? null : rating.MAnagerComments
                                                    }).ToListAsync(); 



            return employee_iteration_ratings;
        }

        public async Task UpsertEmployeeIterationRating(bool isManagerRequested, EmployeeRatingRequestModel employeeRatingRequestModel)
        {
            var iterationRating = await _context.EmployeeIterationRatings.Where(x => x.Id == employeeRatingRequestModel.IterationRatingId)
                                                                        .SingleOrDefaultAsync();

            if (null != iterationRating)
            {
                if (isManagerRequested)
                {
                    iterationRating.ManagerRatingId = employeeRatingRequestModel.ManagerRatingId.Value;
                    iterationRating.MAnagerComments = employeeRatingRequestModel.ManagerComments;
                }
                else
                {
                    iterationRating.EmployeeRatingId = employeeRatingRequestModel.EmployeeRatingId;
                    iterationRating.EmployeeComment = employeeRatingRequestModel.EmployeeComments;
                }
            }
            else
            {
                iterationRating = new EmployeeIterationRatings()
                {
                    IterationGoalId = employeeRatingRequestModel.IterationGoalId,
                    EmployeeRatingId = employeeRatingRequestModel.EmployeeRatingId,
                    EmployeeComment = employeeRatingRequestModel.EmployeeComments,
                    ManagerRatingId = null,
                    MAnagerComments = null
                };

                _context.EmployeeIterationRatings.Add(iterationRating);
            }

            await _context.SaveChangesAsync();
        }

        public async Task UpdateEmployeeIterationResult(int employeeId, int iterationId, int ratingId)
        {
            var iterationResult = await _context.EmployeeIterationResults.Where(x => x.EmployeeId == employeeId
                                                                              && x.IterationId == iterationId)
                                                                         .SingleOrDefaultAsync();

            if (null != iterationResult)
            {
                iterationResult.RatingId = ratingId;
            }
            else
            {
                iterationResult = new EmployeeIterationResult()
                {
                    EmployeeId = employeeId,
                    IterationId = iterationId,
                    RatingId = ratingId
                };

                _context.EmployeeIterationResults.Add(iterationResult);
            }

            await _context.SaveChangesAsync();
        }
    }
}
