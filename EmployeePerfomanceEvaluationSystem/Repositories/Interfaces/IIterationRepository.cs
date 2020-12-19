using EmployeePerfomanceEvaluationSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IIterationRepository
    {
        Task<Iteration> CreateNewIteration(Iteration iteration);
        Task<bool> CheckIterationValid(Iteration iteration);
        Task<bool> CheckIterationExists(int iterationId);
        Task RemoveIteration(int iterationId);
        Task<Iteration> UpdateIteration(int iterationId, int newStatus);
        Task<List<Iteration>> GetExistingIterations();
        Task<List<Iteration>> GetActiveIterations();
        Task<Iteration> GetIteration(int iterationId);
        Task<List<Iteration>> GetLockedIterations();
    }
}
