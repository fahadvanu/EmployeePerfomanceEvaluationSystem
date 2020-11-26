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
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration;
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
                if(null == iteration || iteration.Status != (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
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

        [HttpPost("employee-iteration-state")]
        [Authorize]
        public async Task<IActionResult> GetEmployeeIterationState([FromBody] EmployeeIterationStateRequestModel employeeIterationStateRequestModel)
        {
            try
            {

               
                var employeeIterationState = await _employeeIterationRepository.GetEmployeeIterationState(employeeIterationStateRequestModel.EmployeeId,
                                                                                        employeeIterationStateRequestModel.IterationId);
                if(employeeIterationState == null)
                    return Ok(new ApiResponseOKResult() { Data = Constants.Constants.ITERATION_STATE.NOT_STARTED });

                return Ok(new ApiResponseOKResult() { Data = employeeIterationState.IterationStateId });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to load employee iteration state");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to load employee iteration state" });
            }
        }

        [HttpPost("update-employee-iteration-state")]
        [Authorize]
        public async Task<IActionResult> UpdateEmployeeIterationState([FromBody] UpdateEmployeeIterationState updateEmployeeIterationStateRequestModel)
        {
            try
            {
                var reportingManagerId = HttpContext.User.GetUserIdClaim();

                var user = await _userService.GetUserById(updateEmployeeIterationStateRequestModel.EmployeeId);
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {updateEmployeeIterationStateRequestModel.EmployeeId} does not exists" });

                if (updateEmployeeIterationStateRequestModel.IterationStateId == (int)Constants.Constants.ITERATION_STATE.SET_GOALS
                   || updateEmployeeIterationStateRequestModel.IterationStateId == (int)Constants.Constants.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING
                   )
                {
                    if (user.ReportingManagerId != reportingManagerId)
                        return new JsonResult(new ApiResponseFailure()
                        {
                            ErrorMessage = "Requested User has different reporting manager assigned",
                            StatusCode = (int)StatusCodes.Status403Forbidden
                        })
                        { StatusCode = StatusCodes.Status403Forbidden };
                }
                else
                {
                    if (user.UserId != reportingManagerId)
                        return new JsonResult(new ApiResponseFailure()
                        {
                            ErrorMessage = "Not Allowed",
                            StatusCode = (int)StatusCodes.Status403Forbidden
                        })
                        { StatusCode = StatusCodes.Status403Forbidden };
                }


                var iteration = await _iterationRepository.GetIteration(updateEmployeeIterationStateRequestModel.IterationId);
                if (null == iteration || iteration.Status != (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Iteration." });


                await _employeeIterationRepository.UpdateEmployeeIterationState(updateEmployeeIterationStateRequestModel.EmployeeId,
                                                                                updateEmployeeIterationStateRequestModel.IterationId,
                                                                                updateEmployeeIterationStateRequestModel.IterationStateId,
                                                                                reportingManagerId);

                return Ok(new ApiResponseOKResult() { Data = true});
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update employee iteration state");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update employee iteration state" });
            }
        }

        [HttpPost("employee-iteration-goals")]
        [Authorize]
        public async Task<IActionResult> GetEmployeeIterationGoals([FromBody] IterationGoalRequestModel iterationGoalRequestModel)
        {
            try
            {

                var user = await _userService.GetUserById(iterationGoalRequestModel.EmployeeId);
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {iterationGoalRequestModel.EmployeeId} does not exists" });

                var iteration = await _iterationRepository.GetIteration(iterationGoalRequestModel.IterationId);
                if (null == iteration)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Iteration." });


                var employeeIterationGoals = await _employeeIterationRepository.GetEmployeeIterationGoals(iterationGoalRequestModel.EmployeeId,
                                                                             iterationGoalRequestModel.IterationId);

                return Ok(new ApiResponseOKResult() { Data = employeeIterationGoals });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch employee iteration goals");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch employee iteration goals" });
            }
        }

        [HttpPost("update-iteration-goal/{employeeIterationGoalId}")]
        [Authorize]
        public async Task<IActionResult> UpdateIterationGoal(int employeeIterationGoalId, [FromBody] EmployeeIterationGoalRequestModel employeeIterationGoalRequestModel)
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
                    })
                    { StatusCode = StatusCodes.Status403Forbidden };


                var iteration = await _iterationRepository.GetIteration(employeeIterationGoalRequestModel.IterationId);
                if (null == iteration || iteration.Status != (int)Constants.Constants.ITERATION_STATUS.ACTIVE)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Iteration." });

                var iterationGoal = await _employeeIterationRepository.GetEmployeeIterationGoal(employeeIterationGoalId);
                if (iterationGoal == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Requested Goal not found" });

                var model = _mapper.Map<EmployeeIterationGoals>(employeeIterationGoalRequestModel);
                model.ReportingManagerId = reportingManagerId;
                await _employeeIterationRepository.UpdateEmployeeIterationGoal(model);

                return Ok(new ApiResponseOKResult() { Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update iteration goal");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update iteration goal" });
            }
        }

        [HttpDelete("remove-iteration-goal/{employeeIterationGoalId}")]
        [Authorize]
        public async Task<IActionResult> RemoveIterationGoal(int employeeIterationGoalId)
        {
            try
            {
                var iterationGoal = await _employeeIterationRepository.GetEmployeeIterationGoal(employeeIterationGoalId);
                if (iterationGoal == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Requested Goal not found" });

                await _employeeIterationRepository.RemoveEmployeeIterationGoal(employeeIterationGoalId);

                return Ok(new ApiResponseOKResult() { Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to remove iteration goal");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to remove iteration goal" });
            }
        }

        [HttpPost("employee-iteration-details")]
        [Authorize]
        public async Task<IActionResult> EmployeeIterationDetails([FromBody] IterationDetailsRequestModel iterationDetailsRequestModel)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();

                var iteration = await _iterationRepository.GetIteration(iterationDetailsRequestModel.IterationId);
                if (iteration == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Requested Iteration not found" });

                var iterationState = await _employeeIterationRepository.GetEmployeeIterationState(userId, 
                                                                             iterationDetailsRequestModel.IterationId);
                var response = _mapper.Map<IterationDetailsResponseModel>(iteration);
                response.IterationStateId = (iterationState == null) ? (int)Constants.Constants.ITERATION_STATE.NOT_STARTED
                                                                     : iterationState.IterationStateId;

                return Ok(new ApiResponseOKResult() { Data = response });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch iteration details");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch iteration details" });
            }
        }

        [HttpPost("employee-iteration-ratings")]
        [Authorize]
        public async Task<IActionResult> EmployeeIterationRatingDetails([FromBody] IterationRatingDetailRequestModel iterationRatingDetailsRequestModel)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();

                var employee = await _userService.GetUserById(iterationRatingDetailsRequestModel.EmployeeId);
                if (null == employee)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {iterationRatingDetailsRequestModel.EmployeeId} does not exists" });


                var iteration = await _iterationRepository.GetIteration(iterationRatingDetailsRequestModel.IterationId);
                if (iteration == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Requested Iteration not found" });


                bool isManagerRequestedDetails = (userId == employee.ReportingManagerId);
                if (!isManagerRequestedDetails)
                {
                    if(userId != iterationRatingDetailsRequestModel.EmployeeId)
                        return new JsonResult(new ApiResponseFailure()
                        {
                            ErrorMessage = "Not allowed",
                            StatusCode = (int)StatusCodes.Status403Forbidden
                        })
                        { StatusCode = StatusCodes.Status403Forbidden };
                }

                var response = await _employeeIterationRepository.GetEmployeeIterationGoalRatings(iterationRatingDetailsRequestModel.EmployeeId,
                                                                                            iterationRatingDetailsRequestModel.IterationId);


                return Ok(new ApiResponseOKResult() { Data = new  { 
                                                           GoalRatings = response,
                                                           IsManagerRequested = isManagerRequestedDetails
                                                     }});
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch iteration ratings details");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch iteration ratings details" });
            }
        }

        [HttpPost("save-employee-iteration-rating")]
        [Authorize]
        public async Task<IActionResult> SaveEmployeeIterationRating([FromBody] EmployeeRatingRequestModel employeeRatingRequestModel)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();

                var employee = await _userService.GetUserById(employeeRatingRequestModel.EmployeeId);
                if (null == employee)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {employeeRatingRequestModel.EmployeeId} does not exists" });


                bool isManagerRequestedDetails = (userId == employee.ReportingManagerId);
                await _employeeIterationRepository.UpsertEmployeeIterationRating(isManagerRequestedDetails, employeeRatingRequestModel);

                return Ok(new ApiResponseOKResult()
                {
                    Data = true
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to save iteration ratings");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to save iteration ratings" });
            }
        }
    }
}
