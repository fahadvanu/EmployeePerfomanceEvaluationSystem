using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class RatingConfiguration : IEntityTypeConfiguration<Ratings>
    {
        public void Configure(EntityTypeBuilder<Ratings> builder)
        {
            builder.ToTable("ratings");
            builder.HasKey(m => m.RatingId);

            builder.Property(m => m.RatingId)
                   .HasColumnName("rating_id");

            builder.Property(m => m.RatingName)
                    .HasColumnName("rating_name")
                    .HasMaxLength(100)
                    .IsRequired();

            builder.Property(m => m.Weightage)
                   .HasColumnName("weightage")
                   .IsRequired();
        }
    }
}
