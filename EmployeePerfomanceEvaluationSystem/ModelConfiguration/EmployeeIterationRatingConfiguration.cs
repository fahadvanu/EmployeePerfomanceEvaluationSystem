using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class EmployeeIterationRatingConfiguration : IEntityTypeConfiguration<EmployeeIterationRatings>
    {
        public void Configure(EntityTypeBuilder<EmployeeIterationRatings> builder)
        {
            builder.ToTable("employee_iteration_ratings");

            builder.HasKey(m => m.Id);

            builder.Property(m => m.Id)
                    .HasColumnName("id");

            builder.Property(m => m.IterationGoalId)
                   .HasColumnName("iteration_goal_id")
                   .IsRequired();

            builder.HasOne<EmployeeIterationGoals>(s => s.IterationGoal)
                   .WithOne()
                   .HasForeignKey<EmployeeIterationRatings>(x => x.IterationGoalId);

            builder.Property(m => m.EmployeeRatingId)
                   .HasColumnName("employee_rating_id")
                   .IsRequired();

            builder.HasOne<Ratings>(s => s.EmployeeRating)
                   .WithMany()
                   .HasForeignKey(s => s.EmployeeRatingId);

            builder.Property(m => m.EmployeeComment)
                   .HasColumnName("employee_comments")
                   .HasMaxLength(200);

            builder.Property(m => m.ManagerRatingId)
                   .HasColumnName("manager_rating_id")
                   .IsRequired();

            builder.HasOne<Ratings>(s => s.ManagerRating)
                   .WithMany()
                   .HasForeignKey(s => s.ManagerRatingId);

            builder.Property(m => m.MAnagerComments)
                   .HasColumnName("manager_comments")
                   .HasMaxLength(200);

            builder.HasIndex(x => new { x.IterationGoalId });
        }
    }
}
