using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels
{
    public class ApiResponse
    {
        public int StatusCode { get; set; }

        public ApiResponse(int statusCode)
        {
            StatusCode = statusCode;
        }
    }
}
