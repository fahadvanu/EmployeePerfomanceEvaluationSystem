using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.User
{
    public class ReportingManagerRequestModel
    {
        public int ReportedUserId { get; set; }
        public int CurrentReportingManagerId { get; set; }
        public int NewReportingManagerId { get; set; }
    }
}
