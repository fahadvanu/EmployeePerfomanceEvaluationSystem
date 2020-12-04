using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.EmployeeIteration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Services
{
    public class EmployeeIterationHelperService
    {
        public static int CalculateFinalRating(List<EmployeeIterationGoalRatings> employeeIterationGoalRatings)
        {
            int result = Constants.Constants.POOR_RATING;

            var rating_sum = 0;

            foreach(var employee_rating in employeeIterationGoalRatings)
            {

                if (employee_rating.ManagerRatingId == Constants.Constants.POOR_RATING)
                    rating_sum = rating_sum + Constants.Constants.POOR_RATING_WEIGHTAGE;

                if (employee_rating.ManagerRatingId == Constants.Constants.NEEDSIMPROVEMENT_RATING)
                    rating_sum = rating_sum + Constants.Constants.NEEDSIMPROVEMENT_RATING_WEIGHTAGE;

                if (employee_rating.ManagerRatingId == Constants.Constants.MEETSREQUIREMENT_RATING)
                    rating_sum = rating_sum + Constants.Constants.MEETSREQUIREMENT_RATING_WEIGHTAGE;

                if (employee_rating.ManagerRatingId == Constants.Constants.EXCEEDSEXPECTAION_RATING)
                    rating_sum = rating_sum + Constants.Constants.EXCEEDSEXPECTAION_RATING_WEIGHTAGE;

                if (employee_rating.ManagerRatingId == Constants.Constants.OUTSTANDING_RATING)
                    rating_sum = rating_sum + Constants.Constants.OUTSTANDING_RATING_WEIGHTAGE;
            }

            var rating_average = rating_sum / (employeeIterationGoalRatings.Count);


            if (rating_average > Constants.Constants.EXCEEDSEXPECTAION_RATING_WEIGHTAGE
                && rating_average <= Constants.Constants.OUTSTANDING_RATING_WEIGHTAGE) {
                result = Constants.Constants.OUTSTANDING_RATING;
            }
            else if (rating_average > Constants.Constants.MEETSREQUIREMENT_RATING_WEIGHTAGE
            && rating_average <= Constants.Constants.EXCEEDSEXPECTAION_RATING_WEIGHTAGE)
            {
                result = Constants.Constants.EXCEEDSEXPECTAION_RATING;
            }
            else if (rating_average > Constants.Constants.NEEDSIMPROVEMENT_RATING_WEIGHTAGE
            && rating_average <= Constants.Constants.MEETSREQUIREMENT_RATING_WEIGHTAGE)
            {
                result = Constants.Constants.MEETSREQUIREMENT_RATING;
            }
            else if (rating_average > Constants.Constants.POOR_RATING_WEIGHTAGE
            && rating_average <= Constants.Constants.NEEDSIMPROVEMENT_RATING_WEIGHTAGE)
            {
                result = Constants.Constants.NEEDSIMPROVEMENT_RATING;
            }

            return result;
        }
    }
}
