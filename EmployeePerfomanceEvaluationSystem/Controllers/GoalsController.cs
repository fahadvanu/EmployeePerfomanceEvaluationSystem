using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using EmployeePerfomanceEvaluationSystem.CustomAttributes;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Request_Models.Goals;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/goals")]
    [ApiController]
    public class GoalsController : ControllerBase
    {
        private IGoalsRepository _goalRepository;
        private ILogger<GoalsController> _logger;
        private IMapper _mapper;

        public GoalsController(IGoalsRepository goalRepository,
                               ILogger<GoalsController> logger,
                               IMapper mapper)
        {
            _goalRepository = goalRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost("get_goals")]
        [Authorize]
        public async Task<IActionResult> GetActiveGoals()
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var activeGoals = await _goalRepository.GetGoals();
                return Ok(new ApiResponseOKResult() { Data = activeGoals });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch active goals");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch active goals" });
            }
        }

        [HttpPost("add_goal")]
        [AdminAuthorize]
        public async Task<IActionResult> AddNewGoal([FromBody] CreateGoalRequestModel goalCreateRequestModel)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var goalExists = await _goalRepository.GoalExists(goalCreateRequestModel.GoalName);
                if (goalExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Goal {goalCreateRequestModel.GoalName} already exists" });

                var newGoal = await _goalRepository.AddGoal(_mapper.Map<Goal>(goalCreateRequestModel));
                return Ok(new ApiResponseOKResult() { Data = newGoal });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create new goal");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to create new goal" });
            }
        }

        [HttpDelete("delete_goal/{goalId}")]
        [AdminAuthorize]
        public async Task<IActionResult> DeleteGoal(int goalId)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var goal = await _goalRepository.GetGoal(goalId);
                if (null == goal)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = "Goal does not exists" });

                await _goalRepository.DeleteGoal(goalId);
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = null });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to delete goal");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to delete goal" });
            }
        }

        [HttpPost("update_goal/{goalId}")]
        [AdminAuthorize]
        public async Task<IActionResult> UpdateGoal(int goalId, [FromBody] UpdateGoalRequestModel updateGoalRequestModel)
        {
            try
            {
                System.Threading.Thread.Sleep(1000);
                var goalExists = await _goalRepository.GoalExists(updateGoalRequestModel.GoalName);
                if (goalExists)
                    return BadRequest(new ApiResponseBadRequestResult() { ErrorMessage = $"Goal { updateGoalRequestModel.GoalName } already exists" });

                await _goalRepository.UpdateGoal(goalId, updateGoalRequestModel.GoalName);
                return Ok(new ApiResponseOKResult() { StatusCode = StatusCodes.Status200OK, Data = updateGoalRequestModel });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update goal");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to update goal" });
            }
        }
    }
}
