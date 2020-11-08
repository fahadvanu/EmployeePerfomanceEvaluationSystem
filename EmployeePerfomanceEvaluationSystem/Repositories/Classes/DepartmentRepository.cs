using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Asn1.IsisMtt.X509;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Classes
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private EmployeePerformaceDbContext _context;
        private UserIdentityDbContext _userContext;

        public DepartmentRepository(EmployeePerformaceDbContext context,
                                    UserIdentityDbContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        public async Task<Department> AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            await _context.SaveChangesAsync();
            return department;
        }

        public async Task DeleteDepartment(int departmentId)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.Id == departmentId);
            if (null != existingDepartment)
            {
                _context.Remove(existingDepartment);
                await _context.SaveChangesAsync();
            }

            var departmentUsers = await _userContext.Users.Where(x => x.DepartmentId == departmentId).ToListAsync();
            if (departmentUsers.Any())
            {
                foreach(var departmentUser in departmentUsers)
                {
                    departmentUser.DepartmentId = 0;
                }

                await _userContext.SaveChangesAsync();
            }
        }

        public async Task<bool> DepartmentExists(string departmentName)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.DepartmentName.Trim().ToLower() 
                                                                                        == departmentName.Trim().ToLower());
            return existingDepartment != null;
        }

        public async Task<Department> GetDepartment(int departmentId)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.Id == departmentId);
            return existingDepartment;
        }

        public async Task<List<Department>> GetDepartments()
        {
            return await _context.Departments.OrderBy(x => x.DepartmentName).ToListAsync();
        }

        public async Task UpdateDepartment(int departmentId, string departmentName)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.Id == departmentId);
            if (null != existingDepartment)
            {
                existingDepartment.DepartmentName = departmentName;
                await _context.SaveChangesAsync();
            }
        }
    }
}
