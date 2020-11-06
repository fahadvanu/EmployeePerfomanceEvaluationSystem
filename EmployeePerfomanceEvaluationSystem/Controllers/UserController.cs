using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using EmployeePerfomanceEvaluationSystem.Extensions;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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

        public UserController(IUserService userService,
                              ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
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
    }
}
