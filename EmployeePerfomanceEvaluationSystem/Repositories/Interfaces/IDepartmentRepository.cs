using EmployeePerfomanceEvaluationSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        Task<List<Department>> GetDepartments();
        Task AddDepartment(Department department);
        Task UpdateDepartment(int departmentId, string departmentName);
        Task DeleteDepartment(int departmentId);
        Task<Department> GetDepartment(int departmentId);
        Task<bool> DepartmentExists(string departmentName);
    }
}
