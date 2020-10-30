using AutoMapper;
using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Repositories.Classes;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static void AddRepositories(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IEmployeeRoleRespository, EmployeeRoleRepository>();
            serviceCollection.AddScoped<IDepartmentRepository, DepartmentRepository>();
        }

        public static void AddAutoMapperService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddAutoMapper(typeof(Startup));
        }

        public static void AddAPIBehaviourConfiguration(this IServiceCollection serviceCollection)
        {
            serviceCollection.Configure((Action<ApiBehaviorOptions>)(apiBehaviorOptions => {

                apiBehaviorOptions.InvalidModelStateResponseFactory = actionContext =>
                {
                    return CustomModelStateBadRequestResponse(actionContext);
                };
            }));
        }

        private static BadRequestObjectResult CustomModelStateBadRequestResponse(ActionContext actionContext)
        {
            var modelStateErrors = actionContext.ModelState
                                  .Where(modelError => modelError.Value.Errors.Count > 0)
                                  .Select(modelError => new ModelStateErrors
                                  {
                                     Key = modelError.Key,
                                     Error = modelError.Value.Errors.FirstOrDefault().ErrorMessage
                                  }).ToList();

            return new BadRequestObjectResult(new ApiResponseBadRequestResult() { Errors = modelStateErrors, ErrorMessage = "Bad request. Please check the data entered." });
        }
    }
}
