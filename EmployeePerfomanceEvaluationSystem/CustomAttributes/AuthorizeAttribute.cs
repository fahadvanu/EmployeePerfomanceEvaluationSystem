using EmployeePerfomanceEvaluationSystem.Extensions;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.CustomAttributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AdminAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (context.HttpContext.User == null)
            {
                context.Result = new JsonResult(new ApiResponseFailure() { ErrorMessage = "Authorization Failure", StatusCode = (int)StatusCodes.Status401Unauthorized }) 
                                        { StatusCode = StatusCodes.Status401Unauthorized };
            }
            else
            {
                bool isAdminUser = context.HttpContext.User.IsAdmin();
                if (!isAdminUser)
                {
                   context.Result = new JsonResult(new ApiResponseFailure() { ErrorMessage = "Not allowed to access page", StatusCode = (int)StatusCodes.Status403Forbidden })
                                                        { StatusCode = StatusCodes.Status403Forbidden };
                }
            }          

        }
    }
}
