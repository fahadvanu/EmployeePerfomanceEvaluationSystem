using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class UserModelConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("application_users");
            builder.HasKey(o => o.Id);
            builder.Ignore(x => x.LockoutEnabled);
            builder.Ignore(x => x.EmailConfirmed);
          //  builder.Ignore(x => x.SecurityStamp);
            builder.Ignore(x => x.ConcurrencyStamp);
            builder.Ignore(x => x.PhoneNumber);
            builder.Ignore(x => x.PhoneNumberConfirmed);
            builder.Ignore(x => x.TwoFactorEnabled);
            builder.Ignore(x => x.LockoutEnd);
            builder.Ignore(x => x.AccessFailedCount);

            builder.Property(x => x.UserName)
                   .HasMaxLength(100)
                   .IsRequired();

            builder.Property(x => x.Email)
                  .HasMaxLength(100)
                  .IsRequired();

            builder.Property(x => x.FirstName)
                 .HasMaxLength(100)
                 .IsRequired();

            builder.Property(x => x.LastName)
                 .HasMaxLength(100)
                 .IsRequired();

            builder.Property(x => x.RoleId)
              .IsRequired();

            builder.Property(x => x.DepartmentId)
            .IsRequired();

            builder.Property(x => x.ReportingManagerId)
                   .IsRequired();

            builder.Property(x => x.PasswordHash)
                   .IsRequired();


            builder.Property(x => x.ContactNumber)
                 .HasMaxLength(100)
                 .HasColumnType("VARCHAR");
        }
    }
}
