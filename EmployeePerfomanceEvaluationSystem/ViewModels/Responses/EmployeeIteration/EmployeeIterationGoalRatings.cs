using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration
{
    public class EmployeeIterationGoalRatings
    {
        public int IterationGoalId { get; set; }
        public string GoalTitle { get; set; }
        public int Weightage { get; set; }
        public string Description { get; set; }
        public int? IterationRatingId { get; set; }
        public int? EmployeeRatingId { get; set; }
        public string EmployeeComments { get; set; }
        public int? ManagerRatingId { get; set; }
        public string ManagerComments { get; set; }
    }
}
