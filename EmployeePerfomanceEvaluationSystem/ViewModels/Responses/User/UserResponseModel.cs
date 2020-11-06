using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ViewModels.Responses.User
{
    public class UserResponseModel
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string ContactNumber { get; set; }
        public int ReportingManagerId { get; set; }
        public string ReportingManager { get; set; }
        public bool IsAdmin { get; set; }
    }
}
