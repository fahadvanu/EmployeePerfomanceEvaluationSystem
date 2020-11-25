using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration
{
    public class EmployeeRatingRequestModel
    {
        public int EmployeeId { get; set; }
        public int IterationRatingId { get; set; }
        public int IterationGoalId { get; set; }
        public int EmployeeRatingId { get; set; }
        public string EmployeeComments { get; set; }
        public int? ManagerRatingId { get; set; }
        public string ManagerComments { get; set; }
    }
}
