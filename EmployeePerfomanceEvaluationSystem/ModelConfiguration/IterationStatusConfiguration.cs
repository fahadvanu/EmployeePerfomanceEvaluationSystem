using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class IterationStatusConfiguration : IEntityTypeConfiguration<IterationStatus>
    {
        public void Configure(EntityTypeBuilder<IterationStatus> builder)
        {
            builder.ToTable("iteration_status");

            builder.HasKey(m => m.Id);

            builder.Property(m => m.Id)
                    .HasColumnName("id");

            builder.Property(m => m.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50)
                    .IsRequired();
        }
    }
}
