using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses
{
    public class ApiResponseNotFound : ApiResponse
    {
        public ApiResponseNotFound() : base(404) { }
        public string ErrorMessage { get; set; }
    }
}
