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
    }
}
