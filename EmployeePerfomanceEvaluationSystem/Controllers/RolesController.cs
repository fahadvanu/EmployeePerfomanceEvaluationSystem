using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.Role;
using EmployeePerfomanceEvaluationSystem.ViewModels;
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

        public RolesController(IEmployeeRoleRespository employeeRoleRespository,
                               ILogger<RolesController> logger)
        {
            _employeeRoleRespository = employeeRoleRespository;
            _logger = logger;
        }

        [HttpPost("get_roles")]
        public async Task<IActionResult> GetAllRoles()
        {
            try
            {
                var roles = await _employeeRoleRespository.GetRoles();
                return Ok(new ResponseMessage() { StatusCode = StatusCodes.Status200OK, Data = roles });
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch all roles");
                return StatusCode(StatusCodes.Status500InternalServerError, "Failed to fetch all roles");
            }
        }

        [HttpPost("add_role")]
        public async Task<IActionResult> AddNewRole([FromBody]CreateRoleRequestModel roleCreateRequestModel)
        {
            try
            {
                var roleExists = await _employeeRoleRespository.RoleExists(roleCreateRequestModel.RoleName);
                if (roleExists)
                    return BadRequest($"Role {roleCreateRequestModel.RoleName} already exists");

                await _employeeRoleRespository.AddRole(new Models.EmployeeRole() { RoleName = roleCreateRequestModel.RoleName });
                return Ok(new ResponseMessage() { StatusCode = StatusCodes.Status200OK, Data = null });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create new role");
                return StatusCode(StatusCodes.Status500InternalServerError, "Failed to create new role");
            }
        }

        [HttpDelete("delete_role/{roleId}")]
        public async Task<IActionResult> DeleteRole(int roleId)
        {
            try
            {
                var role = await _employeeRoleRespository.GetRole(roleId);
                if(null == role)
                    return BadRequest("Role does not exists");

                await _employeeRoleRespository.DeleteRole(roleId);     
                return Ok(new ResponseMessage() { StatusCode = StatusCodes.Status200OK, Data = null });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to delete role");
                return StatusCode(StatusCodes.Status500InternalServerError, "Failed to delete role");
            }
        }

        [HttpPost("update_role/{roleId}")]
        public async Task<IActionResult> UpdateRole(int roleId, [FromBody] UpdateRoleRequestModel updateRoleRequestModel)
        {
            try
            {
                var roleExists = await _employeeRoleRespository.RoleExists(updateRoleRequestModel.RoleName);
                if (roleExists)
                    return BadRequest($"Role {updateRoleRequestModel.RoleName} already exists");

                await _employeeRoleRespository.UpdateRole(roleId, updateRoleRequestModel.RoleName);
                return Ok(new ResponseMessage() { StatusCode = StatusCodes.Status200OK, Data = null });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update role");
                return StatusCode(StatusCodes.Status500InternalServerError, "Failed to update role");
            }
        }
    }
}
