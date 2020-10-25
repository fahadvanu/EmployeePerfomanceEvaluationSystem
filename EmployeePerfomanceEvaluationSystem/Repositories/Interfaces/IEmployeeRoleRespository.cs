using EmployeePerfomanceEvaluationSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IEmployeeRoleRespository
    {
        Task<List<EmployeeRole>>GetRoles();
        Task AddRole(EmployeeRole role);
        Task UpdateRole(int roleId, string roleName);
        Task DeleteRole(int roleId);
        Task<EmployeeRole> GetRole(int roleId);
        Task<bool> RoleExists(string roleName);
    }
}
