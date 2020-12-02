using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.CustomAttributes;
using EmployeePerfomanceEvaluationSystem.ExcelGenerators;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.Reports;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Reports;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/report")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private IReportRepository _reportRepository;
        private ILogger<ReportController> _logger;
        private IIterationRepository _iterationRepository;
        private IMapper _mapper;

        public ReportController(IReportRepository reportRepository,
                                ILogger<ReportController> logger,
                                IIterationRepository iterationRepository,
                                IMapper mapper)
        {
            _reportRepository = reportRepository;
            _iterationRepository = iterationRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("iteration-in-state-count")]
        [AdminAuthorize]
        public async Task<IActionResult> IterationInDifferentStateCount([FromBody]IterationInStateCountRequestModel requestModel)
        {
            try
            {    
                var iteration = await _iterationRepository.GetIteration(requestModel.IterationId);
                if (null == iteration || iteration.Status != (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Iteration." });

                var response = await _reportRepository.GetIterationInDifferentStateCount(requestModel.IterationId);             
                return Ok(new ApiResponseOKResult() { Data = response });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch iteration in different state count");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch iteration in different state count" });
            }
        }

        [HttpGet("export-iteration-state-count/{iterationId}")]
       // [AdminAuthorize]
        public async Task<IActionResult> ExportRegisterUsers(int iterationId)
        {
            try
            {
                List<IterationStateCountExcel> iterationStates = await _reportRepository.GetIterationStateCountExcelData(iterationId);
                var stream = GenerateIterationStateCountExcelStream(iterationStates);
      
                return File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "IterationStateCount.xlsx");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch iteration in different state count");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch iteration in different state count" });
            }
        }

        private MemoryStream GenerateIterationStateCountExcelStream(List<IterationStateCountExcel> iterationStates)
        {
            IterationStateCountExcelGenerator iterationStateCountExcelGenerator = new ExcelGenerators.IterationStateCountExcelGenerator(iterationStates);
            var stream = iterationStateCountExcelGenerator.GenerateIterationStateCountExcelStream() as MemoryStream;
            return stream;
        }
    }
}
