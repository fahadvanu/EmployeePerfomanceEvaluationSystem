using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Constants
{
    public class Constants
    {
        public static string PASSWORD_RESET_EMAIL_SUBJECT = "Employee Performance Evaluation Password Reset Link";

        public enum ITERATION_STATUS
        {
            NOTACTIVE = 1,
            ACTIVE = 2,
            LOCKED = 3,
            DELETED = 4
        }
    }
}
