using EmployeePerfomanceEvaluationSystem.ValidationAttributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration
{
    public class IterationDetailsRequestModel
    {
        public int EmployeeId { get; set; }
        [EnforceValueNotEqualToZero("Iteration is required")]
        public int IterationId { get; set; }
    }
}
