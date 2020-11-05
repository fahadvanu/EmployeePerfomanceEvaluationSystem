using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.Role;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/roles")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private IEmployeeRoleRespository _employeeRoleRespository;
        private ILogger<RolesController> _logger;
        private IMapper _mapper;

        public RolesController(IEmployeeRoleRespository employeeRoleRespository,
                               ILogger<RolesController> logger,
                               IMapper mapper)
        {
            _employeeRoleRespository = employeeRoleRespository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("get_roles")]
        public async Task<IActionResult> GetAllRoles()
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var roles = await _employeeRoleRespository.GetRoles();
                return Ok(new ApiResponseOKResult() { Data = roles });
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch all roles");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch all roles" });
            }
        }

        [HttpPost("add_role")]
        [Authorize]
        public async Task<IActionResult> AddNewRole([FromBody]CreateRoleRequestModel roleCreateRequestModel)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var roleExists = await _employeeRoleRespository.RoleExists(roleCreateRequestModel.RoleName);
                if (roleExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Role {roleCreateRequestModel.RoleName} already exists" });

                var newRole = await _employeeRoleRespository.AddRole(_mapper.Map<EmployeeRole>(roleCreateRequestModel));
                return Ok(new ApiResponseOKResult() { Data = newRole });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create new role");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to create new role" });
            }
        }

        [HttpDelete("delete_role/{roleId}")]
        [Authorize]
        public async Task<IActionResult> DeleteRole(int roleId)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var role = await _employeeRoleRespository.GetRole(roleId);
                if(null == role)
                    return NotFound(new ApiResponseNotFound() { ErrorMessage = "Role does not exists" });

                await _employeeRoleRespository.DeleteRole(roleId);     
                return Ok(new ApiResponseOKResult() { Data = roleId });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to delete role");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to delete role" });
            }
        }

        [HttpPost("update_role/{roleId}")]
        [Authorize]
        public async Task<IActionResult> UpdateRole(int roleId, [FromBody] UpdateRoleRequestModel updateRoleRequestModel)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var roleExists = await _employeeRoleRespository.RoleExists(updateRoleRequestModel.RoleName);
                if (roleExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Role {updateRoleRequestModel.RoleName} already exists" });

                await _employeeRoleRespository.UpdateRole(roleId, updateRoleRequestModel.RoleName);
                return Ok(new ApiResponseOKResult() { Data = updateRoleRequestModel });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update role");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update role" });
            }
        }
    }
}
