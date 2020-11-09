using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string ContactNumber { get; set; }
        public int  RoleId { get; set; }
        public int DepartmentId { get; set; }
        public int ReportingManagerId { get; set; }
        public bool IsAdmin { get; set; }
        public ICollection<ReportingManagerRequest> ReportingManagerRequests { get; set; }
    }

    public class ApplicationRole : IdentityRole<int>
    {

    }
}
