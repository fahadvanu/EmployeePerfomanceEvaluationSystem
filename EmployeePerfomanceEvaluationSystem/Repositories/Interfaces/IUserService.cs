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
        Task AddNewReportingManagerRequest(ReportingManagerRequest reportingManagerRequest);
        Task<bool> CheckReportingManagerRequestExists(ReportingManagerRequest reportingManagerRequest);
        Task<List<User>> GetRegisteredUsersExceptLoggedInUser(int userId);
    }
}
