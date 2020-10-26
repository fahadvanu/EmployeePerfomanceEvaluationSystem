﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.Role
{
    public class CreateRoleRequestModel
    {
        [Required(ErrorMessage = "Rolename cannot be empty or null")]
        public string RoleName { get; set; }
    }
}
