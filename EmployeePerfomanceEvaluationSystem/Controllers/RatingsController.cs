using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.ViewModels;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EmployeePerfomanceEvaluationSystem.Controllers
{
    [Route("api/ratings")]
    [ApiController]
    public class RatingsController : ControllerBase
    {
        private IRatingRepository _ratingRespository;
        private ILogger<RatingsController> _logger;

        public RatingsController(IRatingRepository ratingRespository,
                                 ILogger<RatingsController> logger
                                )
        {
            _ratingRespository = ratingRespository;
            _logger = logger;
        }

        [HttpPost("get_ratings")]
        [Authorize]
        public async Task<IActionResult> GetAllRatings()
        {
            try
            {
                var ratings = await _ratingRespository.GetRatings();
                return Ok(new ApiResponseOKResult() { Data = ratings });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch all ratings");
                return StatusCode((int)HttpStatusCode.InternalServerError, new ApiResponseFailure() { ErrorMessage = "Failed to fetch all ratings" });
            }
        }

    }
}
