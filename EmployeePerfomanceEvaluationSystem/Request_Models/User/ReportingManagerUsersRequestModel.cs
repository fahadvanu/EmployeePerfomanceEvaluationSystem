using EmployeePerfomanceEvaluationSystem.ValidationAttributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.User
{
    public class ReportingManagerUsersRequestModel
    {
        [EnforceValueNotEqualToZeroAttribute("Reporting manager is required")]
        public int ReportingManagerId { get; set; }
    }
}
