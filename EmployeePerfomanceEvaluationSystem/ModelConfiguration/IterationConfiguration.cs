using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class IterationConfiguration : IEntityTypeConfiguration<Iteration>
    {
        public void Configure(EntityTypeBuilder<Iteration> builder)
        {
            builder.ToTable("iterations");

            builder.HasKey(m => m.Id);

            builder.Property(m => m.Id)
                    .HasColumnName("id");

            builder.Property(m => m.Title)
                   .HasColumnName("title")
                   .IsRequired()
                   .HasMaxLength(200);

            builder.Property(m => m.StartDate)
                  .HasColumnName("start_date")
                  .IsRequired()
                  .HasColumnType("datetime");

            builder.Property(m => m.EndDate)
                 .HasColumnName("end_date")
                 .IsRequired()
                 .HasColumnType("datetime");

            builder.Property(m => m.CreatedDate)
                .HasColumnName("created_date")
                .HasColumnType("datetime");

            builder.Property(m => m.ActivatedDate)
                .HasColumnName("activated_date")
                .HasColumnType("datetime");

            builder.Property(m => m.LockedDate)
                .HasColumnName("locked_date")
                .HasColumnType("datetime");

            builder.Property(x => x.Status)
                   .HasColumnName("status");

            builder.HasIndex(x => new { x.StartDate, x.EndDate }).IsUnique();

            builder.HasOne<IterationStatus>(s => s.IterationStatus)
                   .WithMany()
                   .HasForeignKey(s => s.Status);
        }
    }
}
