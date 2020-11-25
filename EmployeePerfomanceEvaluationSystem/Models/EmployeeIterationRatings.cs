using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class EmployeeIterationRatings
    {
        public int Id { get; set; }
        public int IterationGoalId { get; set; }
        public EmployeeIterationGoals IterationGoal { get; set; }
        public int EmployeeRatingId { get; set; }
        public Ratings EmployeeRating { get; set; }
        public string EmployeeComment { get; set; }
        public int? ManagerRatingId { get; set; }
        public Ratings ManagerRating { get; set; }
        public string MAnagerComments { get; set; }
    }
}
