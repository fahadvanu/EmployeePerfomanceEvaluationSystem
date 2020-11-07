using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Request_Models.Accounts;
using EmployeePerfomanceEvaluationSystem.Request_Models.User;
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

            CreateMap<EmployeePerfomanceEvaluationSystem.Models.User, LoginResponseModel>()
                                 .ForMember(x => x.UserId, p => p.MapFrom(y => y.Id));

            CreateMap<UserUpdateRequestModel, EmployeePerfomanceEvaluationSystem.Models.User>()
                                 .ForMember(x => x.Id, p => p.MapFrom(y => y.UserId));
        }
    }
}
