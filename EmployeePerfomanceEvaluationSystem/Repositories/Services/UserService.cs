
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
        public UserService(IConfiguration configuration)
        {
            _configuration = configuration;
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
    }
}
