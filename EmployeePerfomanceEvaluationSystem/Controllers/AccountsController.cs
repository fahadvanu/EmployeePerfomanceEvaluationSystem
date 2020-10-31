using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Request_Models.Accounts;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Accounts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private UserManager<User> _userManager;
        private IMapper _mapper;
        private ILogger<AccountsController> _logger;

        public AccountsController(UserManager<User> userManager,
                                  IMapper mapper,
                                  ILogger<AccountsController> logger)
        {
            _userManager = userManager;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegistrationRequestModel registrationRequestModel)
        {
            try
            {
                var user = await _userManager.FindByNameAsync(registrationRequestModel.UserName);
                if (user != null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User {registrationRequestModel.UserName} already exists" });

                var userToSave = _mapper.Map<User>(registrationRequestModel);
                var result = await _userManager.CreateAsync(userToSave, registrationRequestModel.Password);
                if(!result.Succeeded)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = "Failed to process registration request" });
               
                user = await _userManager.FindByNameAsync(registrationRequestModel.UserName);
                var registrationResponseModel = _mapper.Map<RegistrationResponseModel>(user);

                return Ok(new ApiResponseOKResult() { Data = registrationResponseModel });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to register new user");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to register new user" });
            }
        }
    }
}
