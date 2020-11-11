using EmployeePerfomanceEvaluationSystem.ValidationAttributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Iterations
{
    public class UpdateIterationRequestModel
    {
        [IterationStatusValueCheck]
        public int NewStatus { get; set; }
    }
}
