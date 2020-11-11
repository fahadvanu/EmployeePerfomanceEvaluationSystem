using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class Iteration
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Status { get; set; }
        public IterationStatus IterationStatus { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ActivatedDate { get; set; }
        public DateTime? LockedDate { get; set; }
    }
}
