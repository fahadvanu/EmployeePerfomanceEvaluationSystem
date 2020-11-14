using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Request_Models.Accounts;
using EmployeePerfomanceEvaluationSystem.Request_Models.User;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Accounts;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.User;
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

            CreateMap<ReportingManagerRequestModel, EmployeePerfomanceEvaluationSystem.Models.ReportingManagerRequest>();
            CreateMap<User, RegisteredUsers>()
                .ForMember(x => x.UserId, p => p.MapFrom(y => y.Id));

            CreateMap<User, UserResponseModel>()
                .ForMember(x => x.UserId, p => p.MapFrom(y => y.Id)); ;
        }
    }
}
