using EmployeePerfomanceEvaluationSystem.ValidationAttributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.User
{
    public class UserUpdateRequestModel
    {
        public int UserId { get; set; }

        [Required]
        [MaxLength(100, ErrorMessage ="First name cannot be more than 100 characters")]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100, ErrorMessage = "Last name cannot be more than 100 characters")]
        public string LastName { get; set; }

        [EnforceValueNotEqualToZeroAttribute("Role is required")]
        public int RoleId { get; set; }

        [EnforceValueNotEqualToZeroAttribute("Department is required")]
        public int DepartmentId { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        [MaxLength(10, ErrorMessage = "Contactnumber cannot be more than 10 characters")]
        public string ContactNumber { get; set; }
    }
}
