using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration
{
    public class EmployeeIterationGoalResponse
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int IterationId { get; set; }
        public string GoalTitle { get; set; }
        public int GoalId { get; set; }
        public int ReportingManagerId { get; set; }
        public string Description { get; set; }
        public int Weightage { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}
