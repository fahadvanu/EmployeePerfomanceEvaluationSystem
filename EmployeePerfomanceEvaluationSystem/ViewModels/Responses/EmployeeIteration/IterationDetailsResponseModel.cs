using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration
{
    public class IterationDetailsResponseModel
    {
        public int IterationId { get; set; }
        public string Title { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int Status { get; set; }
        public string CreatedDate { get; set; }
        public string ActivatedDate { get; set; }
        public int IterationStateId { get; set; }
    }
}
