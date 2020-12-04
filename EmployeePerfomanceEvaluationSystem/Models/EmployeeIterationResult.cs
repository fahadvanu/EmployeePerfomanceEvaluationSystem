using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class EmployeeIterationResult
    {
        public int Id { get; set; }
        public int IterationId { get; set; }
        public Iteration Iteration { get; set; }
        public int EmployeeId { get; set; }
        public User Employee { get; set; }
        public int RatingId { get; set; }
        public Ratings Rating { get; set; }
    }
}
