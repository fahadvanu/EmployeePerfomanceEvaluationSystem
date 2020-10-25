using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Role
{
    public class UpdateRoleRequestModel
    {
        [Required]
        public string RoleName { get; set; }
    }
}
