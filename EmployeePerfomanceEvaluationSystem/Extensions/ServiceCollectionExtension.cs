using AutoMapper;
using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Classes;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Repositories.Services;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static void AddContext(this IServiceCollection serviceCollection, IConfiguration Configuration)
        {
            serviceCollection.AddDbContext<EmployeePerformaceDbContext>(cfg =>
            {
                cfg.UseMySQL(Configuration["Database:ConnectionString"]);
            });

            serviceCollection.AddDbContext<UserIdentityDbContext>(cfg =>
            {
                cfg.UseMySQL(Configuration["Database:ConnectionString"]);
            });
        }

        public static void ConfigureIdentity(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddIdentity<User, ApplicationRole>()
                   .AddEntityFrameworkStores<UserIdentityDbContext>()
                   .AddDefaultTokenProviders();

            serviceCollection.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = true;
            });

            serviceCollection.Configure<DataProtectionTokenProviderOptions>(options =>
                            options.TokenLifespan = TimeSpan.FromDays(1));
        }


        public static void AddRepositories(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IEmployeeRoleRespository, EmployeeRoleRepository>();
            serviceCollection.AddScoped<IDepartmentRepository, DepartmentRepository>();
            serviceCollection.AddScoped<IGoalsRepository, GoalRepository>();
            serviceCollection.AddScoped<IIterationRepository, IterationRepository>();
            serviceCollection.AddScoped<IEmployeeIterationRepository, EmployeeIterationRepository>();
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

        public static void AddSMTPServerSettings(this IServiceCollection serviceCollection, IConfiguration Configuration)
        {
            var smtp_server_settings = Configuration
                                            .GetSection("SmtpServerSettings")
                                            .Get<SmtpServerSettings>();

            serviceCollection.AddSingleton(smtp_server_settings);
        }

        public static void AddServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IEmailService, EmailService>();
            serviceCollection.AddScoped<IUserService, UserService>();
        }

        public static void AddJWTAuthentication(this IServiceCollection serviceCollection, IConfiguration Configuration)
        {
                            serviceCollection.AddAuthentication(x =>
                            {
                                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                            })
                             .AddJwtBearer(options =>
                             {
                                 options.RequireHttpsMetadata = false;
                                 options.SaveToken = true;
                                 options.TokenValidationParameters = new TokenValidationParameters
                                 {
                                     ValidateIssuer = true,
                                     ValidateAudience = false,
                                     ValidateLifetime = true,
                                     ValidateIssuerSigningKey = true,
                                     ValidIssuer = Configuration["JWTTokenValidation:Issuer"],
                                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                                                                Configuration["JWTTokenValidation:Key"])),
                                     ClockSkew = TimeSpan.Zero
                                 };
                             });
        }
    }
}
