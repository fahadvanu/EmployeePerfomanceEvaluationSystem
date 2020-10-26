using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses
{
    public class ApiResponseFailure : ApiResponse
    {
        public ApiResponseFailure() : base(500) { }
        public string ErrorMessage { get; set; }
    }
}
