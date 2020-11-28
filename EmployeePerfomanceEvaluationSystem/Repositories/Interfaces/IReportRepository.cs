using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Reports;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IReportRepository
    {
        Task<List<IterationWithStateCount>> GetIterationInDifferentStateCount(int iterationId);
    }
}
