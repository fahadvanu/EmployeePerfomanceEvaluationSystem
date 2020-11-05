using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Services
{
    public class UserService : IUserService
    {
        private UserManager<User> _userManager;
        public UserService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<User> GetUserById(string userId)
        {
            return await _userManager.FindByIdAsync(userId);
        }
    }
}
