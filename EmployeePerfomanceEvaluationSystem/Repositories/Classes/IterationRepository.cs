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
    public class IterationRepository : IIterationRepository
    {
        private EmployeePerformaceDbContext _context;

        public IterationRepository(EmployeePerformaceDbContext context)
        {
            _context = context;
        }

        public async Task<Iteration> CreateNewIteration(Iteration iteration)
        {
            _context.Iteration.Add(iteration);
            await _context.SaveChangesAsync();
            return iteration;
        }

        public async Task<bool> CheckIterationValid(Iteration iteration)
        {
            var existingIteration = await _context.Iteration.FirstOrDefaultAsync(x => x.StartDate == iteration.StartDate
                                                                                    && x.EndDate == iteration.EndDate
                                                                                    && x.Status != (int)Constants.Constants.ITERATION_STATUS.DELETED);

            if (existingIteration != null)
                return false;

            var iterationBetweenDate = await _context.Iteration
                                                      .FirstOrDefaultAsync(x => 
                                                                               ( (x.StartDate == iteration.StartDate)
                                                                              || (x.StartDate <= iteration.StartDate
                                                                                  && x.EndDate >= iteration.StartDate)
                                                                              || (x.StartDate <= iteration.EndDate
                                                                                  && x.EndDate >= iteration.EndDate))
                                                                              && x.Status != (int)Constants.Constants.ITERATION_STATUS.DELETED);
            return iterationBetweenDate == null;
        }

        public async Task<bool> CheckIterationExists(int iterationId)
        {
            var existingIteration = await _context.Iteration.FirstOrDefaultAsync(x => x.Id == iterationId
                                                                                   && x.Status != (int)Constants.Constants.ITERATION_STATUS.DELETED);

            return existingIteration != null;
        }

        public async Task RemoveIteration(int iterationId)
        {
            var existingIteration = await _context.Iteration.FirstOrDefaultAsync(x => x.Id == iterationId
                                                                                   && x.Status != (int)Constants.Constants.ITERATION_STATUS.DELETED);
            existingIteration.Status = (int)Constants.Constants.ITERATION_STATUS.DELETED;
            await _context.SaveChangesAsync();
        }

        public async Task<Iteration> UpdateIteration(int iterationId, int newStatus)
        {

            var existingIteration = await _context.Iteration.FirstOrDefaultAsync(x => x.Id == iterationId
                                                                                   && x.Status != (int)Constants.Constants.ITERATION_STATUS.DELETED);

            existingIteration.Status = newStatus;

            if (newStatus == (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
                existingIteration.ActivatedDate = DateTime.Now;

            if (newStatus == (int)Constants.Constants.ITERATION_STATUS.LOCKED)
                existingIteration.LockedDate = DateTime.Now;

            await _context.SaveChangesAsync();
            return existingIteration;
        }

        public async Task<List<Iteration>> GetExistingIterations()
        {
            return await _context.Iteration
                                .Where(x => x.Status != (int)Constants.Constants.ITERATION_STATUS.DELETED)
                                .OrderByDescending(x => x.StartDate)
                                .ToListAsync();
        }

        public async Task<List<Iteration>> GetActiveIterations()
        {
            return await _context.Iteration
                                .Where(x => x.Status == (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
                                .OrderByDescending(x => x.StartDate)
                                .ToListAsync();
        }
    }
}
