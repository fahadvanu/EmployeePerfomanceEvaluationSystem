using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.CustomAttributes;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.Department;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/departments")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private IDepartmentRepository _departmentRepository;
        private ILogger<DepartmentsController> _logger;
        private IMapper _mapper;

        public DepartmentsController(IDepartmentRepository departmentRespository,
                                     ILogger<DepartmentsController> logger,
                                     IMapper mapper)
        {
            _departmentRepository = departmentRespository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("get_departments")]
        public async Task<IActionResult> GetAllDepartments()
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var departments = await _departmentRepository.GetDepartments();
                return Ok(new ApiResponseOKResult() { Data = departments });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch all departments");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch all departments" });
            }
        }

        [HttpPost("add_department")]
        [AdminAuthorize]
        public async Task<IActionResult> AddNewDepartment([FromBody] CreateDepartmentRequestModel departmentCreateRequestModel)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var departmentExists = await _departmentRepository.DepartmentExists(departmentCreateRequestModel.DepartmentName);
                if (departmentExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Department {departmentCreateRequestModel.DepartmentName} already exists" });

                var newDepartment = await _departmentRepository.AddDepartment(_mapper.Map<Department>(departmentCreateRequestModel));
                return Ok(new ApiResponseOKResult() { Data = newDepartment });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create new department");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to create new department" });
            }
        }

        [HttpDelete("delete_department/{departmentId}")]
        [AdminAuthorize]
        public async Task<IActionResult> DeleteDepartment(int departmentId)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var department = await _departmentRepository.GetDepartment(departmentId);
                if (null == department)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = "Department does not exists" });

                await _departmentRepository.DeleteDepartment(departmentId);
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = null });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to delete department");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to delete department" });
            }
        }

        [HttpPost("update_department/{departmentId}")]
        [AdminAuthorize]
        public async Task<IActionResult> UpdateDepartment(int departmentId, [FromBody] UpdateDepartmentRequestModel updateDepartmentRequestModel)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var departmentExists = await _departmentRepository.DepartmentExists(updateDepartmentRequestModel.DepartmentName);
                if (departmentExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Department {updateDepartmentRequestModel.DepartmentName} already exists" });

                await _departmentRepository.UpdateDepartment(departmentId, updateDepartmentRequestModel.DepartmentName);
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = updateDepartmentRequestModel });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update department");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update department" });
            }
        }
    }
}
