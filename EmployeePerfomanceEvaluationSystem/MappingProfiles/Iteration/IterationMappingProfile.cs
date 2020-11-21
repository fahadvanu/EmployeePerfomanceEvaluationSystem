using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Request_Models.Iterations;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Iteration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.MappingProfiles.Iteration
{
    public class IterationMappingProfile : Profile
    {
        public IterationMappingProfile()
        {
            CreateMap<CreateIterationRequestModel, EmployeePerfomanceEvaluationSystem.Models.Iteration>()
                    .ForMember(x => x.CreatedDate, opt => opt.MapFrom(src => DateTime.Now))
                    .ForMember(x => x.Status, opt => opt.MapFrom(src => Constants.Constants.ITERATION_STATUS.NOTACTIVE));


            CreateMap<EmployeePerfomanceEvaluationSystem.Models.Iteration, IterationReposnseModel>()
                    .ForMember(x => x.IterationId, opt => opt.MapFrom(src => src.Id))
                    .ForMember(x => x.StartDate, opt => opt.MapFrom(src => src.StartDate.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.EndDate, opt => opt.MapFrom(src => src.EndDate.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.CreatedDate, opt => opt.MapFrom(src => src.CreatedDate.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.ActivatedDate, opt => opt.MapFrom(src => (src.ActivatedDate == null) ? "N/A"
                                                                    : src.ActivatedDate.Value.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.LockedDate, opt => opt.MapFrom(src => (src.LockedDate == null) ? "N/A"
                                                                    : src.LockedDate.Value.ToString("dd/MM/yyyy")));

            CreateMap<EmployeePerfomanceEvaluationSystem.Models.Iteration, IterationDetailsResponseModel>()
                    .ForMember(x => x.IterationId, opt => opt.MapFrom(src => src.Id))
                    .ForMember(x => x.StartDate, opt => opt.MapFrom(src => src.StartDate.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.EndDate, opt => opt.MapFrom(src => src.EndDate.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.CreatedDate, opt => opt.MapFrom(src => src.CreatedDate.ToString("dd/MM/yyyy")))
                    .ForMember(x => x.ActivatedDate, opt => opt.MapFrom(src => (src.ActivatedDate == null) ? "N/A"
                                                                    : src.ActivatedDate.Value.ToString("dd/MM/yyyy")));
        }
    }
}
