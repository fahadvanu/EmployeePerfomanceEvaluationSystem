using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Repositories.Services;
using EmployeePerfomanceEvaluationSystem.Request_Models.Accounts;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Accounts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
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
        private IEmailService _emailService;

        public AccountsController(UserManager<User> userManager,
                                  SignInManager<User> signInManager,
                                  IMapper mapper,
                                  ILogger<AccountsController> logger,
                                  IConfiguration configuration,
                                  IEmailService emailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _logger = logger;
            _configuration = configuration;
            _emailService = emailService;
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

        [HttpPost("reset_password_link")]
        public async Task<IActionResult> GenerateResetPasswordLink([FromBody]ResetPasswordRequestModel resetPasswordRequestModel)
        {
            try
            {

                var user = await _userManager.FindByEmailAsync(resetPasswordRequestModel.Email);
                if (user == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User with email { resetPasswordRequestModel.Email } does not exists" });


                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var passwordResetTemplate = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(),
                                                                       "EmailTemplates",
                                                                       "password_reset_email_template.html"));
              
                byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
                var codeEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
                var emailModel = new EmailModel();
                emailModel.FormPasswordResetEmailModel(user, codeEncoded, passwordResetTemplate, _configuration);
                await _emailService.SendEmail(emailModel);
                return Ok(new ApiResponseOKResult() { Data = codeEncoded });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to generate password reset token");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to generate password reset token" });
            }
        }

        [HttpPost("update_password")]
        public async Task<IActionResult> UpdatePassword([FromBody] UpdatePasswordRequestModel updatePasswordRequestModel)
        {
            try
            {
                var user = await _userManager.FindByNameAsync(updatePasswordRequestModel.UserName);
                if (user == null)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"User { updatePasswordRequestModel.UserName } does not exists" });

                var codeDecodedBytes = WebEncoders.Base64UrlDecode(updatePasswordRequestModel.Token);
                var codeDecoded = Encoding.UTF8.GetString(codeDecodedBytes);
                var result = await _userManager.ResetPasswordAsync(user, codeDecoded,
                                                                   updatePasswordRequestModel.Password);
                return Ok(new ApiResponseOKResult() { Data = result.Succeeded });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update password");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update password. Reset Link may have expired." });
            }
        }
    }
}
