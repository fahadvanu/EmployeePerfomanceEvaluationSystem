using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Request_Models.Accounts;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Accounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.MappingProfiles.Accounts
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile()
        {
            CreateMap<RegistrationRequestModel, EmployeePerfomanceEvaluationSystem.Models.User>();
            CreateMap<EmployeePerfomanceEvaluationSystem.Models.User, RegistrationResponseModel>();
        }
    }
}
