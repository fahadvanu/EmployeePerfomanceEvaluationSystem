using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class EmployeeIterationState
    {
        public int Id { get; set; }
        public int IterationId { get; set; }
        public Iteration Iteration { get; set; }
        public int EmployeeId { get; set; }
        public User Employee { get; set; }
        public int ReportingManagerId { get; set; }
        public User ReportingManager { get; set; }
        public int IterationStateId { get; set; }
        public IterationStates IterationState { get; set; }
    }
}
