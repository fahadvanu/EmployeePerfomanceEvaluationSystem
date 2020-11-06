using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IUserService
    {
        Task<UserResponseModel> GetUserById(int userId);
    }
}
