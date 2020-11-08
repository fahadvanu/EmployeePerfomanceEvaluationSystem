using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.DataContext
{
    public class EmployeePerformaceDbContext : DbContext
    {
        public EmployeePerformaceDbContext(DbContextOptions<EmployeePerformaceDbContext> options) 
                                                    : base(options)
        {

        }

        public DbSet<EmployeeRole> Roles { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Goal> Goals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
