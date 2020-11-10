using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.User
{
    public class ApproveReportingManagerPendingRequest
    {
        public int ReportingManagerRequestId { get; set; }
        public int ReportedUserId { get; set; }
        public string ReportedUserEmail { get; set; }
        public int CurrentReportingManagerId { get; set; }
        public string CurrentReportingManagerEmail { get; set; }
        public int NewReportingManagerId { get; set; }
        public string NewReportingManagerEmail { get; set; }
        public bool Status { get; set; }
    }
}
