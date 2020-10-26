using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Request_Models.Department;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeePerfomanceEvaluationSystem.Models;

namespace EmployeePerfomanceEvaluationSystem.MappingProfiles.Department
{
    public class DepartmentMappingProfile : Profile
    {
        public DepartmentMappingProfile()
        {
            CreateMap<CreateDepartmentRequestModel, EmployeePerfomanceEvaluationSystem.Models.Department>();
        }
    }
}
