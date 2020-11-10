using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class ReportingManagerRequestConfiguration : IEntityTypeConfiguration<ReportingManagerRequest>
    {
        public void Configure(EntityTypeBuilder<ReportingManagerRequest> builder)
        {
            builder.ToTable("reporting_manager_requests");

            builder.HasKey(m => m.ReportingManagerRequestId);

            builder.Property(m => m.ReportingManagerRequestId)
                    .HasColumnName("reporting_manager_request_id");

            builder.Property(m => m.ReportedUserId)
                   .HasColumnName("reported_user_id")
                   .IsRequired();

            builder.Property(m => m.CurrentReportingManagerId)
                  .HasColumnName("current_reporting_manager_id");

            builder.Property(m => m.NewReportingManagerId)
                  .HasColumnName("new_reporting_manager_id")
                  .IsRequired();

            builder.Property(x => x.RequestStatus)
                   .HasColumnName("request_status")
                   .HasDefaultValue(0)
                   .HasColumnType("bit");

            builder.HasIndex(x => x.ReportedUserId);

            builder.HasOne<User>(s => s.ReportedUser)
                   .WithMany(g => g.ReportingManagerRequests)
                   .HasForeignKey(s => s.ReportedUserId);

            builder.HasOne<User>(s => s.CurrentReportingManager)
                   .WithMany()
                   .HasForeignKey(s => s.CurrentReportingManagerId);

            builder.HasOne<User>(s => s.NewReportingManager)
                   .WithMany()
                   .HasForeignKey(s => s.NewReportingManagerId);
        }
    }
}
