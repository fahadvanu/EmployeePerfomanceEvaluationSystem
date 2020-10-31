using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Accounts
{
    public class RegistrationRequestModel
    {
        [Required]
        [MaxLength(100)]
        public string UserName { get; set; }
        [Required]
        [MaxLength(100)]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }
        [Required]
        public string Gender { get; set; }
        public string ContactNumber { get; set; }
        [Required]
        public int RoleId { get; set; }
        [Required]
        public int DepartmentId { get; set; }
        public int ReportingManagerId { get; set; }
    }
}
