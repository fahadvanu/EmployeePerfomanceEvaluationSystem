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
    public class EmployeeRoleRepository : IEmployeeRoleRespository
    {
        private EmployeePerformaceDbContext _context;
        private UserIdentityDbContext _userContext;

        public EmployeeRoleRepository(EmployeePerformaceDbContext context,
                                      UserIdentityDbContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        public async Task<EmployeeRole> AddRole(EmployeeRole role)
        {
            _context.Roles.Add(role);
            await _context.SaveChangesAsync();
            return role;
        }

        public async Task DeleteRole(int roleId)
        {
            var existingRole = await _context.Roles.SingleOrDefaultAsync(r => r.RoleId == roleId);
            if(null != existingRole)
            {
                _context.Remove(existingRole);
                await _context.SaveChangesAsync();
            }

            var userBelongingToRole = await _userContext.Users.Where(x => x.RoleId == roleId).ToListAsync();
            if (userBelongingToRole.Any())
            {
                foreach (var roleUser in userBelongingToRole)
                {
                    roleUser.RoleId = 0;
                }

                await _userContext.SaveChangesAsync();
            }
        }

        public async Task<List<EmployeeRole>> GetRoles()
        {
            return await _context.Roles.OrderBy(x => x.RoleName).ToListAsync();
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
            var existingRole = await _context.Roles.SingleOrDefaultAsync(r => r.RoleName.Trim().ToLower() == roleName.Trim().ToLower());
            return existingRole != null;
        }
    }
}
