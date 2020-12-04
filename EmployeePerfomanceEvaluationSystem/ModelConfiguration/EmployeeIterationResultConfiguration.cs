using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class EmployeeIterationResultConfiguration : IEntityTypeConfiguration<EmployeeIterationResult>
    {
        public void Configure(EntityTypeBuilder<EmployeeIterationResult> builder)
        {
            builder.ToTable("employee_iteration_result");

            builder.HasKey(m => m.Id);

            builder.Property(m => m.Id)
                    .HasColumnName("id");

            builder.Property(m => m.EmployeeId)
                   .HasColumnName("employee_id")
                   .IsRequired();

            builder.HasOne<User>(s => s.Employee)
                   .WithMany()
                   .HasForeignKey(s => s.EmployeeId);

            builder.Property(m => m.IterationId)
                   .HasColumnName("iteration_id")
                   .IsRequired();

            builder.HasOne<Iteration>(s => s.Iteration)
                   .WithMany()
                   .HasForeignKey(s => s.IterationId);

            builder.Property(m => m.RatingId)
                   .HasColumnName("rating_id")
                   .IsRequired();

            builder.HasOne<Ratings>(s => s.Rating)
                   .WithMany()
                   .HasForeignKey(s => s.RatingId);


            builder.HasIndex(x => new { x.EmployeeId, x.IterationId });
        }
    }
}
