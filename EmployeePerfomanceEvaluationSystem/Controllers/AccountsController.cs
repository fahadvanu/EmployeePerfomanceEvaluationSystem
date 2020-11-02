using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Services;
using EmployeePerfomanceEvaluationSystem.Request_Models.Accounts;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Accounts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private UserManager<User> _userManager;
        private SignInManager<User> _signInManager;
        private IMapper _mapper;
        private ILogger<AccountsController> _logger;
        private IConfiguration _configuration;

        public AccountsController(UserManager<User> userManager,
                                  SignInManager<User> signInManager,
                                  IMapper mapper,
                                  ILogger<AccountsController> logger,
                                  IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _logger = logger;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody]RegistrationRequestModel registrationRequestModel)
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

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginRequestModel loginRequestModel)
        {
            try
            {
                var user = await _userManager.FindByNameAsync(loginRequestModel.UserName);
                if (user == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Credentials. Please try again" });

                var result = await _signInManager.CheckPasswordSignInAsync(user, loginRequestModel.Password, false);
                if(!result.Succeeded)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Invalid Credentials. Please try again" });
              
                var token = JwtTokenService.GenerateJWTToken(user, _configuration);
                var responseModel = _mapper.Map<LoginResponseModel>(user);
                responseModel.Token = token;
                return Ok(new ApiResponseOKResult() { Data = responseModel });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to register new user");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to process login request" });
            }
        }
    }
}
