
using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using EmployeePerfomanceEvaluationSystem.Repositories.Mappers;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using SshNet.Security.Cryptography;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Services
{
    public class UserService : IUserService
    {
        private IConfiguration _configuration;
        private EmployeePerformaceDbContext _context;
        private UserIdentityDbContext _userContext;

        public UserService(IConfiguration configuration,
                           EmployeePerformaceDbContext context,
                           UserIdentityDbContext userContext)
        {
            _configuration = configuration;
            _context = context;
            _userContext = userContext;
        }

        public async Task<UserResponseModel> GetUserById(int userId)
        {
            UserResponseModel user = null;
            using (MySqlConnection conn = new MySqlConnection(_configuration["Database:ConnectionString"]))
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("get_user_by_id", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("userId", userId);

                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    user = UserServiceMapper.ToUser(reader);
                }
            }

            return user;
        }

        public async Task AddNewReportingManagerRequest(ReportingManagerRequest reportingManagerRequest)
        {

            _context.ReportingManagerRequests.Add(reportingManagerRequest);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> CheckReportingManagerRequestExists(ReportingManagerRequest reportingManagerRequest)
        {

           var request = await _context.ReportingManagerRequests.FirstOrDefaultAsync(x => 
                                                                            x.ReportedUserId == reportingManagerRequest.ReportedUserId
                                                                            && x.NewReportingManagerId == reportingManagerRequest.NewReportingManagerId
                                                                            && x.RequestStatus == false);
            return (request != null);
        }

        public async Task<List<User>> GetRegisteredUsersExceptLoggedInUser(int userId)
        {

            var users = await _userContext.Users.Where(x => x.Id != userId).ToListAsync();
            return users;
        }
    }
}
