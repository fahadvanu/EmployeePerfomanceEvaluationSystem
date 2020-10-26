using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Department
{
    public class UpdateDepartmentRequestModel
    {

        [Required(ErrorMessage = "Departmentname cannot be empty or null")]
        public string DepartmentName { get; set; }
    }
}
