using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class EmployeeRole
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
    }
}
