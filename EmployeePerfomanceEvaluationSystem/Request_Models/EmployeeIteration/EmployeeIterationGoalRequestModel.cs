using EmployeePerfomanceEvaluationSystem.ValidationAttributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.EmployeeIteration
{
    public class EmployeeIterationGoalRequestModel
    {
        public int Id { get; set; }
        [EnforceValueNotEqualToZero("Employee is required")]
        public int EmployeeId { get; set; }
        [EnforceValueNotEqualToZero("Iteration is required")]
        public int IterationId { get; set; }
        [EnforceValueNotEqualToZero("Weightage cannot be zero")]
        public int Weightage { get; set; }
        [EnforceValueNotEqualToZero("Goal is required")]
        public int GoalId { get; set; }
        [Required(ErrorMessage = "Description is required")]
        [MaxLength(300, ErrorMessage ="Description cannot exceed 300 characters")]
        public string Description { get; set; }
    }
}
