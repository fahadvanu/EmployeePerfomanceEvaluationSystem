using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class EmployeeIterationStateConfiguration : IEntityTypeConfiguration<EmployeeIterationState>
    {
        public void Configure(EntityTypeBuilder<EmployeeIterationState> builder)
        {
            builder.ToTable("employee_iteration_state");

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

            builder.Property(m => m.IterationStateId)
                   .HasColumnName("iteration_state_id")
                   .IsRequired();

            builder.HasOne<IterationStates>(s => s.IterationState)
                   .WithMany()
                   .HasForeignKey(s => s.IterationStateId);

          
            builder.HasIndex(x => new { x.EmployeeId, x.IterationId });
        }
    }
}
