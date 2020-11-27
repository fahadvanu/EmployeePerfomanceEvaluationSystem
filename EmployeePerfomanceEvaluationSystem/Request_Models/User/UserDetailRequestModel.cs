using EmployeePerfomanceEvaluationSystem.ValidationAttributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Request_Models.User
{
    public class UserDetailRequestModel
    {
        [EnforceValueNotEqualToZero("User id is required")]
        public int UserId { get; set; }
    }
}
