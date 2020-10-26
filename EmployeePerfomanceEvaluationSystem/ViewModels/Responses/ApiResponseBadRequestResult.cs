using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels
{
    public class ApiResponseBadRequestResult : ApiResponse
    {
        public ApiResponseBadRequestResult() : base(400) { }
        public string ErrorMessage { get; set; }
        public List<ModelStateErrors> Errors { get; set; }
    }

    public class ModelStateErrors
    {
        public string Key { get; set; }
        public string Error { get; set; }
    }
}
