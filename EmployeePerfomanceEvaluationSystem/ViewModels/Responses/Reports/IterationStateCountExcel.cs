using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Reports
{
    public class IterationStateCountExcel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ReportingManager { get; set; }
        public string Role { get; set; }
        public string Department { get; set; }
        public string IterationTitle { get; set; }
        public DateTime IterationStartDate { get; set; }
        public DateTime IterationEndDate { get; set; }
        public string IterationState { get; set; }
    }
}
