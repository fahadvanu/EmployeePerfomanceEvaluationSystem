using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using FluentValidation.Validators;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Classes
{
    public class EmployeeRoleRepository : IEmployeeRoleRespository
    {
        private EmployeePerformaceDbContext _context;

        public EmployeeRoleRepository(EmployeePerformaceDbContext context)
        {
            _context = context;
        }

        public async Task AddRole(EmployeeRole role)
        {
            _context.Roles.Add(role);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteRole(int roleId)
        {
            var existingRole = await _context.Roles.SingleOrDefaultAsync(r => r.RoleId == roleId);
            if(null != existingRole)
            {
                _context.Remove(existingRole);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<EmployeeRole>> GetRoles()
        {
            return await _context.Roles.ToListAsync();
        }

        public async Task UpdateRole(int roleId, string roleName)
        {
            var existingRole = await _context.Roles.SingleOrDefaultAsync(r => r.RoleId == roleId);
            if (null != existingRole)
            {
                existingRole.RoleName = roleName;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<EmployeeRole> GetRole(int roleId)
        {
            var existingRole = await _context.Roles.SingleOrDefaultAsync(r => r.RoleId == roleId);
            return existingRole;
        }

        public async Task<bool> RoleExists(string roleName)
        {
            var existingRole = await _context.Roles.SingleOrDefaultAsync(r => r.RoleName.ToLower() == roleName.ToLower());
            return existingRole != null;
        }
    }
}
