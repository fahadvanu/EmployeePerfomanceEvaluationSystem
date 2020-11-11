using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Iterations
{
    public class CreateIterationRequestModel : IValidatableObject
    {
        [Required(ErrorMessage ="Title cannot be empty")]
        [MaxLength(200, ErrorMessage = "Title cannot exceeds 200 characters")]
        public string Title { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (StartDate > EndDate)
            {
                yield return new ValidationResult(
                    $"Start date can't be greater than End Date",
                    new[] { nameof(StartDate) });
            }

            var months = GetMonthDifference(StartDate, EndDate);
            if (months != 6)
            {
                yield return new ValidationResult(
                    $"Start date and End Date difference should be of 6 Months",
                    new[] { nameof(StartDate) });
            }
        }

        public int GetMonthDifference(DateTime startDate, DateTime endDate)
        {
            int monthsApart = 12 * (startDate.Year - endDate.Year) + startDate.Month - endDate.Month;
            return Math.Abs(monthsApart) + 1;
        }
    }
}
