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

        public enum ITERATION_STATE
        {
            NOT_STARTED = 0,
            SET_GOALS = 1,
            SELF_EVALUATION = 2,
            MANAGER_EVALUATION = 3,
            ACKNOWLEGDE_REVIEW_MEETING = 4,
            COMPLETED = 5
        }

        public static int OUTSTANDING_RATING_WEIGHTAGE = 100;
        public static int EXCEEDSEXPECTAION_RATING_WEIGHTAGE = 90;
        public static int MEETSREQUIREMENT_RATING_WEIGHTAGE = 75;
        public static int NEEDSIMPROVEMENT_RATING_WEIGHTAGE = 50;
        public static int POOR_RATING_WEIGHTAGE = 10;

        public static int OUTSTANDING_RATING = 1;
        public static int EXCEEDSEXPECTAION_RATING = 2;
        public static int MEETSREQUIREMENT_RATING = 3;
        public static int NEEDSIMPROVEMENT_RATING = 4;
        public static int POOR_RATING = 5;
    }
}
