using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.MappingProfiles.EmployeeIteration
{
    public class EmployeeIterationGoalMappingProfile : Profile
    {
        public EmployeeIterationGoalMappingProfile()
        {
            CreateMap<EmployeeIterationGoalRequestModel, EmployeePerfomanceEvaluationSystem.Models.EmployeeIterationGoals>()
                            .ForMember(x => x.CreatedDate, opt => opt.MapFrom(src => DateTime.Now));

        }
    }
}
