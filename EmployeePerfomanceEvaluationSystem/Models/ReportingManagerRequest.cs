using AutoMapper.Configuration.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class ReportingManagerRequest
    {
        public int ReportingManagerRequestId { get; set; }
        public int ReportedUserId { get; set; }
        public User ReportedUser { get; set; }
        public int? CurrentReportingManagerId { get; set; }
        public User CurrentReportingManager { get; set; }
        public int NewReportingManagerId { get; set; }
        public User NewReportingManager { get; set; }
        public bool RequestStatus { get; set; }
    }
}
