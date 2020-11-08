using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Goals
{
    public class UpdateGoalRequestModel
    {
        [Required(ErrorMessage = "Goal cannot be empty or null")]
        [MaxLength(500, ErrorMessage = "Goal cannot exceeds 500 characters")]
        public string GoalName { get; set; }
    }
}
