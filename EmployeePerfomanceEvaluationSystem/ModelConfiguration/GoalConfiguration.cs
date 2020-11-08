using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class GoalConfiguration : IEntityTypeConfiguration<Goal>
    {
        public void Configure(EntityTypeBuilder<Goal> builder)
        {
            builder.ToTable("goals");

            builder.HasKey(m => m.GoalId);

            builder.Property(m => m.GoalId)
                    .HasColumnName("goal_id");

            builder.Property(m => m.GoalName)
                    .HasColumnName("goal_name")
                    .HasMaxLength(500)
                    .IsRequired();

            builder.Property(x => x.IsActive)
                   .HasDefaultValue(1)
                   .HasColumnType("bit");

            builder.HasIndex(x => x.GoalName);
        }
    }
}
