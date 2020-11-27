using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.CustomAttributes;
using EmployeePerfomanceEvaluationSystem.Extensions;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.User;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private ILogger<UserController> _logger;
        private UserManager<User> _userManager;
        private IMapper _mapper;

        public UserController(IUserService userService,
                              UserManager<User> userManager,
                              IMapper mapper,
                              ILogger<UserController> logger)
        {
            _userService = userService;
            _userManager = userManager;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("get_user")]
        [Authorize]
        public async Task<IActionResult> GetUser()
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userService.GetUserById(userId);

                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = user });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch user");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch user" });
            }
        }

        [HttpPost("get_user_by_id")]
        [Authorize]
        public async Task<IActionResult> GetUserById([FromBody] UserDetailRequestModel userDetailRequestModel)
        {
            try
            {
                var userId = userDetailRequestModel.UserId;
                var user = await _userService.GetUserById(userId);

                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = user });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch user");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch user" });
            }
        }

        [HttpPost("update_user")]
        [Authorize]
        public async Task<IActionResult> UpdateUser([FromBody] UserUpdateRequestModel userUpdateRequestModel)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                if(userId != userUpdateRequestModel.UserId)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Data posted is not for logged-in User." });

                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                _mapper.Map(userUpdateRequestModel, user);
                var result = await _userManager.UpdateAsync(user);
                
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = result.Succeeded });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update user details");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update user details" });
            }
        }

        [HttpPost("reporting_manager_request")]
        [Authorize]
        public async Task<IActionResult> AddReportingManagerRequest([FromBody] ReportingManagerRequestModel reportingManagerRequestModel)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                if (userId != reportingManagerRequestModel.ReportedUserId)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Data posted is not for logged-in User." });

                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                var requestUser = await _userManager.FindByIdAsync(reportingManagerRequestModel.ReportedUserId.ToString());
                if (null == requestUser)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {reportingManagerRequestModel.ReportedUserId} does not exists" });

                if(requestUser.ReportingManagerId == reportingManagerRequestModel.NewReportingManagerId)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"You already have requested reporting manager assigned" });

                var requestModel = _mapper.Map<ReportingManagerRequest>(reportingManagerRequestModel);
                if (reportingManagerRequestModel.CurrentReportingManagerId == 0)
                    requestModel.CurrentReportingManagerId = null;

                var exists = await _userService.CheckReportingManagerRequestExists(requestModel);
                if(exists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Your request for reporting manager is already there in database" });

                await _userService.AddNewReportingManagerRequest(requestModel);

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to submit new reporting manager request");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to submit new reporting manager request" });
            }
        }

        [HttpPost("get_registered_users_except_logged_in_user")]
        [Authorize]
        public async Task<IActionResult> GetRegisteredUsersExceptLoginUsers()
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                var users = await _userService.GetRegisteredUsersExceptLoggedInUser(userId);
                var responseModel = _mapper.Map<List<RegisteredUsers>>(users);

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = responseModel });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch registered users");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch registered users" });
            }
        }

        [HttpPost("pending_reporting_manager_requests")]
        [AdminAuthorize]
        public async Task<IActionResult> GetPendingReportingManagerRequests()
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                var requests = await _userService.GetPendingReportingManagerRequests();
             
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = requests });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch pending reporting manager requests");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch pending reporting manager requests" });
            }
        }

        [HttpPost("approve_reporting_manager_request")]
        [AdminAuthorize]
        public async Task<IActionResult> ApprovePendingReportingManagerRequests([FromBody]ApproveReportingManagerPendingRequest request)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                await _userService.ApprovePendingReportingManagerRequests(request);

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to approve reporting manager requests");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to approve reporting manager request" });
            }
        }

        [HttpDelete("reject_reporting_manager_requests/{requestId}")]
        [AdminAuthorize]
        public async Task<IActionResult> RejectPendingReportingManagerRequests(int requestId)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                await _userService.RejectPendingReportingManagerRequests(requestId);

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = true });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to rejecting reporting manager requests");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to reject reporting manager request" });
            }
        }


        [HttpPost("reporting_manager_employees")]
        [Authorize]
        public async Task<IActionResult> GetReportingManagerEmployees()
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userService.GetUserById(userId);

                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {userId} does not exists" });

                var manager_under_users = await _userService.GetReportingManagerEmployees(userId);
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = manager_under_users });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to reporting manager users");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to reporting manager users" });
            }
        }

        [HttpPost("reporting_manager_employee/{reportingUserId}")]
        [Authorize]
        public async Task<IActionResult> GetReportingManagerEmployeeDetails(int reportingUserId)
        {
            try
            {
                var userId = HttpContext.User.GetUserIdClaim();
                var user = await _userService.GetUserById(reportingUserId);

                if (null == user)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with Id {reportingUserId} does not exists" });

                if(user.ReportingManagerId != userId)
                    return new JsonResult(new ApiResponseFailure() { ErrorMessage = "Requested User has different reporting manager assigned", 
                                                                     StatusCode = (int)StatusCodes.Status403Forbidden })
                                                                   { StatusCode = StatusCodes.Status403Forbidden };

                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = user });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to reporting manager user details");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to reporting manager user details" });
            }
        }
    }
}
