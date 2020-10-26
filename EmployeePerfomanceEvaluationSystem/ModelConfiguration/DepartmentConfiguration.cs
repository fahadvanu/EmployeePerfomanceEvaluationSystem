using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ModelConfiguration
{
    public class DepartmentConfiguration : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.ToTable("employee_department");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Id).HasColumnName("department_id");
            builder.Property(m => m.DepartmentName)
                    .HasColumnName("department_name")
                    .HasMaxLength(50)
                    .IsRequired();
        }
    }
}
