﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class Goal
    {
        public int GoalId { get; set; }
        public string GoalName { get; set; }
        public bool IsActive { get; set; }
    }
}
