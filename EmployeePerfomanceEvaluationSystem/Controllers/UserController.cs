using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Extensions;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.User;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
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
    }
}
