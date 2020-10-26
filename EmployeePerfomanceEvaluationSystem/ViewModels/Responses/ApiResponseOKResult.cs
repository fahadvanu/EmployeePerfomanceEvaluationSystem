using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels
{
    public class ApiResponseOKResult : ApiResponse
    {
        public ApiResponseOKResult() : base(200) { }
        public object Data { get; set; }
    }
}
