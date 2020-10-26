using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Request_Models.Role;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.MappingProfiles.Role
{
    public class RoleMappingProfile : Profile
    {
        public RoleMappingProfile()
        {
            CreateMap<CreateRoleRequestModel, EmployeeRole>();
            CreateMap<UpdateRoleRequestModel, EmployeeRole>();
        }
    }
}
