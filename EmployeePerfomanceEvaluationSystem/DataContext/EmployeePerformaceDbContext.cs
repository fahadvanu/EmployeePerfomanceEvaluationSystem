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
        public DbSet<ReportingManagerRequest> ReportingManagerRequests { get; set; }
        public DbSet<IterationStatus> IterationStatus { get; set; }
        public DbSet<Iteration> Iteration { get; set; }
        public DbSet<Ratings> Ratings { get; set; }
        public DbSet<IterationStates> IterationStates { get; set; }
        public DbSet<EmployeeIterationGoals> EmployeeIterationGoals { get; set; }
        public DbSet<EmployeeIterationState> EmployeeIterationStates{ get; set; }
        public DbSet<EmployeeIterationRatings> EmployeeIterationRatings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
