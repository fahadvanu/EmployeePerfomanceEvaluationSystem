using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Department
{
    public class CreateDepartmentRequestModel
    {
        [Required(ErrorMessage = "Departmentname cannot be empty or null")]
        [MaxLength(50, ErrorMessage ="Department name cannot exceeds 50 characters")]
        public string DepartmentName { get; set; }
    }
}
