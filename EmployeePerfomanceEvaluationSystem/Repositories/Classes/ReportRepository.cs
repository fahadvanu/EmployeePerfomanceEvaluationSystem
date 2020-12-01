using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Repositories.Mappers;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Reports;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Classes
{
    public class ReportRepository : IReportRepository
    {
        private EmployeePerformaceDbContext _context;
        private IConfiguration _configuration;

        public ReportRepository(EmployeePerformaceDbContext context,
                                IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<List<IterationWithStateCount>> GetIterationInDifferentStateCount(int iterationId)
        {
            List<IterationWithStateCount> iterationStates = new List<IterationWithStateCount>();
            using (MySqlConnection conn = new MySqlConnection(_configuration["Database:ConnectionString"]))
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("iteration_with_state_count", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("iteration_id", iterationId);

                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    iterationStates = ReportMappers.ToIterationWithStateCounts(reader);
                }
            }

            return iterationStates;
        }

        public async Task<List<IterationStateCountExcel>> GetIterationStateCountExcelData(int iterationId)
        {
            List<IterationStateCountExcel> iterationStates = new List<IterationStateCountExcel>();
            using (MySqlConnection conn = new MySqlConnection(_configuration["Database:ConnectionString"]))
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("iteration_with_state_count_excel_data", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("iteration_id", iterationId);

                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    iterationStates = ReportMappers.ToIterationWithStateCountsExcel(reader);
                }
            }

            return iterationStates;
        }
    }
}
