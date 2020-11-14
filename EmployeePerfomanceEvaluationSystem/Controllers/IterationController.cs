using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.CustomAttributes;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.Iterations;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Iteration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/iteration")]
    [ApiController]
    public class IterationController : ControllerBase
    {
        private IIterationRepository _iterationRepository;
        private ILogger<IterationController> _logger;
        private IMapper _mapper;

        public IterationController(IIterationRepository iterationRepository,
                                   ILogger<IterationController> logger,
                                   IMapper mapper)
        {
            _iterationRepository = iterationRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("get_iterations")]
        [AdminAuthorize]
        public async Task<IActionResult> GetIterations()
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var iterations = await _iterationRepository.GetExistingIterations();
                var response = _mapper.Map<List<IterationReposnseModel>>(iterations);
                return Ok(new ApiResponseOKResult() { Data = response });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch iterations");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch iterations" });
            }
        }

        [HttpPost("update_iteration/{iterationId}")]
        [AdminAuthorize]
        public async Task<IActionResult> UpdateIteration(int iterationId, 
                                                         [FromBody] UpdateIterationRequestModel updateIterationRequestModel)
        {
            try
            {
                var iterationExists = await _iterationRepository.CheckIterationExists(iterationId);
                if (!iterationExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Iteration does not exists" });

                var iteration = await _iterationRepository.UpdateIteration(iterationId, updateIterationRequestModel.NewStatus);
                return Ok(new ApiResponseOKResult() { Data = iteration });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update iteration");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update iteration" });
            }
        }

        [HttpDelete("remove_iteration/{iterationId}")]
        [AdminAuthorize]
        public async Task<IActionResult> RemoveIteration(int iterationId)
        {
            try
            {
                var iterationExists = await _iterationRepository.CheckIterationExists(iterationId);
                if (!iterationExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Iteration does not exists" });

                await _iterationRepository.RemoveIteration(iterationId);
                return Ok(new ApiResponseOKResult() { Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to remove iteration");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to remove iteration" });
            }
        }

        [HttpPost("new _iteration")]
        [AdminAuthorize]
        public async Task<IActionResult> CreateIteration([FromBody] CreateIterationRequestModel createIterationRequestModel)
        {
            try
            {
                var iteration = _mapper.Map<Iteration>(createIterationRequestModel);
                var iterationValid = await _iterationRepository.CheckIterationValid(iteration);
                if (!iterationValid)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Bad Input data received." });

                iteration = await _iterationRepository.CreateNewIteration(iteration);
                var response = _mapper.Map<IterationReposnseModel>(iteration);
                return Ok(new ApiResponseOKResult() { Data = response });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create iteration");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to create iteration" });
            }
        }

        [HttpPost("active_iterations")]
        [Authorize]
        public async Task<IActionResult> GetActiveIterations()
        {
            try
            {
                var iterations = await _iterationRepository.GetActiveIterations();
                var response = _mapper.Map<List<IterationReposnseModel>>(iterations);
                return Ok(new ApiResponseOKResult() { Data = response });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch active iterations");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch active iterations" });
            }
        }
    }
}
