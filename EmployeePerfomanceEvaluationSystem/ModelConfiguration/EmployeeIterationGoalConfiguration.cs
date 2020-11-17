using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class EmployeeIterationGoalConfiguration : IEntityTypeConfiguration<EmployeeIterationGoals>
    {
        public void Configure(EntityTypeBuilder<EmployeeIterationGoals> builder)
        {
            builder.ToTable("employee_iteration_goals");

            builder.HasKey(m => m.Id);

            builder.Property(m => m.Id)
                    .HasColumnName("id");

            builder.Property(m => m.EmployeeId)
                   .HasColumnName("employee_id")
                   .IsRequired();

            builder.HasOne<User>(s => s.Employee)
                   .WithMany()
                   .HasForeignKey(s => s.EmployeeId);

            builder.Property(m => m.ReportingManagerId)
                   .HasColumnName("reporting_manager_id")
                   .IsRequired();

            builder.HasOne<User>(s => s.ReportingManager)
                   .WithMany()
                   .HasForeignKey(s => s.ReportingManagerId);

            builder.Property(m => m.IterationId)
                   .HasColumnName("iteration_id")
                   .IsRequired();

            builder.HasOne<Iteration>(s => s.Iteration)
                   .WithMany()
                   .HasForeignKey(s => s.IterationId);

            builder.Property(m => m.GoalId)
                   .HasColumnName("goal_id")
                   .IsRequired();

            builder.HasOne<Goal>(s => s.Goal)
                   .WithMany()
                   .HasForeignKey(s => s.GoalId);

            builder.Property(m => m.Weightage)
                   .HasColumnName("weightage")
                   .IsRequired();

            builder.Property(m => m.Description)
                   .HasColumnName("description")
                   .IsRequired()
                   .HasMaxLength(300);

            builder.Property(m => m.CreatedDate)
                   .HasColumnName("created_date")
                   .HasColumnType("datetime");

            builder.HasIndex(x => new { x.EmployeeId, x.IterationId });
        }
    }
}
