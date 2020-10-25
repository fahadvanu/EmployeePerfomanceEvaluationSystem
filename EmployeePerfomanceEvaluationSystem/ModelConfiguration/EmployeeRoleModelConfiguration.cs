using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EmployeePerfomanceEvaluationSystem.FluentValidations
{
    public class EmployeeRoleModelConfiguration : IEntityTypeConfiguration<EmployeeRole>
    {
        public void Configure(EntityTypeBuilder<EmployeeRole> builder)
        {
            builder.ToTable("employee_role");
            builder.HasKey(o => o.RoleId);
            builder.Property(t => t.RoleId).HasColumnName("role_id");
            builder.Property(t => t.RoleName)
                   .IsRequired()
                   .HasColumnName("role_name")
                   .HasMaxLength(50);
        }
    }
}
