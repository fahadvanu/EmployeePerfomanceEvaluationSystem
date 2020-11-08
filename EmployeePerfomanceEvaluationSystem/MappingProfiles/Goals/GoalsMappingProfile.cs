using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Request_Models.Goals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.MappingProfiles.Goals
{
    public class GoalsMappingProfile : Profile
    {
        public GoalsMappingProfile()
        {
            CreateMap<CreateGoalRequestModel, EmployeePerfomanceEvaluationSystem.Models.Goal>();
            CreateMap<UpdateGoalRequestModel, EmployeePerfomanceEvaluationSystem.Models.Goal>();
        }
    }
}
