using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Reports;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Mappers
{
    public class ReportMappers
    {
        public static List<IterationWithStateCount> ToIterationWithStateCounts(DbDataReader dataReader)
        {
            List<IterationWithStateCount> iterationStates = new List<IterationWithStateCount>();
            while (dataReader.Read())
            {
                var iterationWithStateCount = new IterationWithStateCount()
                {

                    Total = int.Parse(dataReader["Total"].ToString()),
                    State = int.Parse(dataReader["iteration_state"].ToString()),
                };

                iterationStates.Add(iterationWithStateCount);
            };

            iterationStates = iterationStates.OrderBy(x => x.Total).ToList();
            return iterationStates;
        }

        public static List<IterationStateCountExcel> ToIterationWithStateCountsExcel(DbDataReader dataReader)
        {
            List<IterationStateCountExcel> iterationStates = new List<IterationStateCountExcel>();
            while (dataReader.Read())
            {
                var iterationWithStateCount = new IterationStateCountExcel()
                {

                    FirstName = dataReader["firstName"].ToString(),
                    LastName =  dataReader["lastName"].ToString(),
                    Email = dataReader["email"].ToString(),
                    ReportingManager = dataReader["email"].ToString(),
                    Role = dataReader["role_name"].ToString(),
                    Department = dataReader["department_name"].ToString(),
                    IterationTitle = dataReader["title"].ToString(),
                    IterationStartDate = DateTime.Parse(dataReader["iteration_start_date"].ToString()),
                    IterationEndDate = DateTime.Parse(dataReader["iteration_end_date"].ToString()),
                    IterationState = dataReader["iteration_state"].ToString(),
                    Rating = dataReader["rating"].ToString()
                };

                iterationStates.Add(iterationWithStateCount);
            };

            iterationStates = iterationStates.OrderBy(x => x.IterationState).ToList();
            return iterationStates;
        }
    }
}
