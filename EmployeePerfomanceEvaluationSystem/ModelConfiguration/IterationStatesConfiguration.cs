using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class IterationStatesConfiguration : IEntityTypeConfiguration<IterationStates>
    {
        public void Configure(EntityTypeBuilder<IterationStates> builder)
        {
            builder.ToTable("iteration_states");
            builder.HasKey(m => m.IterationStateId);

            builder.Property(m => m.IterationStateId)
                   .HasColumnName("iteration_state_id");

            builder.Property(m => m.IterationStateName)
                    .HasColumnName("iteration_state_name")
                    .HasMaxLength(300)
                    .IsRequired();
        }
    }
}
