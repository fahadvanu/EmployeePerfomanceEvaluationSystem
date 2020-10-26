using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Classes
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private EmployeePerformaceDbContext _context;

        public DepartmentRepository(EmployeePerformaceDbContext context)
        {
            _context = context;
        }

        public async Task AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteDepartment(int departmentId)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.Id == departmentId);
            if (null != existingDepartment)
            {
                _context.Remove(existingDepartment);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> DepartmentExists(string departmentName)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.DepartmentName.ToLower() 
                                                                                        == departmentName.ToLower());
            return existingDepartment != null;
        }

        public async Task<Department> GetDepartment(int departmentId)
        {
            var existingDepartment = await _context.Departments.SingleOrDefaultAsync(r => r.Id == departmentId);
            return existingDepartment;
        }

        public async Task<List<Department>> GetDepartments()
        {
            return await _context.Departments.ToListAsync();
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
