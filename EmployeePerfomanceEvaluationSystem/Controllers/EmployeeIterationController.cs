using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Extensions;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/employee-iteration")]
    [ApiController]
    public class EmployeeIterationController : ControllerBase
    {
        private IEmployeeIterationRepository _employeeIterationRepository;
        private IUserService _userService;
        private ILogger<EmployeeIterationController> _logger;
        private IIterationRepository _iterationRepository;
        private IMapper _mapper;

        public EmployeeIterationController(IEmployeeIterationRepository employeeIterationRepository,
                                           IUserService userService,
                                           ILogger<EmployeeIterationController> logger,
                                           IIterationRepository iterationRepository,
                                           IMapper mapper)
        {
            _employeeIterationRepository = employeeIterationRepository;
            _userService = userService;
            _iterationRepository = iterationRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("add-iteration-goal")]
        [Authorize]
        public async Task<IActionResult> AddIterationGoal([FromBody] EmployeeIterationGoalRequestModel employeeIterationGoalRequestModel)
        {
            try
            {

                var reportingManagerId = HttpContext.User.GetUserIdClaim();

                var user = await _userService.GetUserById(employeeIterationGoalRequestModel.EmployeeId);
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {employeeIterationGoalRequestModel.EmployeeId} does not exists" });

                if (user.ReportingManagerId != reportingManagerId)
                    return new JsonResult(new ApiResponseFailure()
                    {
                        ErrorMessage = "Requested User has different reporting manager assigned",
                        StatusCode = (int)StatusCodes.Status403Forbidden
                    }){ StatusCode = StatusCodes.Status403Forbidden };


                var iteration = await _iterationRepository.GetIteration(employeeIterationGoalRequestModel.IterationId);
                if(null != iteration && iteration.Status != (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
                     return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Iteration." });

                var iterationGoal = await _employeeIterationRepository.GetEmployeeIterationGoal(employeeIterationGoalRequestModel.EmployeeId,
                                                                                                employeeIterationGoalRequestModel.IterationId,
                                                                                                employeeIterationGoalRequestModel.GoalId);
                if(iterationGoal != null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Requested Goal is already set" });

                var model = _mapper.Map<EmployeeIterationGoals>(employeeIterationGoalRequestModel);
                model.ReportingManagerId = reportingManagerId;
                await _employeeIterationRepository.AddEmployeeIterationGoal(model);

                return Ok(new ApiResponseOKResult() { Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to add iteration goal");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to add iteration goal" });
            }
        }
    }
}
