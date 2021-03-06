﻿// <auto-generated />
using System;
using EmployeePerfomanceEvaluationSystem.DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    [DbContext(typeof(EmployeePerformaceDbContext))]
    [Migration("20201111075948_iterations1")]
    partial class iterations1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("department_id")
                        .HasColumnType("int");

                    b.Property<string>("DepartmentName")
                        .IsRequired()
                        .HasColumnName("department_name")
                        .HasColumnType("varchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("employee_department");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.EmployeeRole", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("role_id")
                        .HasColumnType("int");

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnName("role_name")
                        .HasColumnType("varchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("RoleId");

                    b.ToTable("employee_role");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.Goal", b =>
                {
                    b.Property<int>("GoalId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("goal_id")
                        .HasColumnType("int");

                    b.Property<string>("GoalName")
                        .IsRequired()
                        .HasColumnName("goal_name")
                        .HasColumnType("varchar(500)")
                        .HasMaxLength(500);

                    b.Property<ulong>("IsActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(1ul);

                    b.HasKey("GoalId");

                    b.HasIndex("GoalName");

                    b.ToTable("goals");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.Iteration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id")
                        .HasColumnType("int");

                    b.Property<DateTime?>("ActivatedDate")
                        .HasColumnName("activated_date")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnName("created_date")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("EndDate")
                        .HasColumnName("end_date")
                        .HasColumnType("datetime");

                    b.Property<DateTime?>("LockedDate")
                        .HasColumnName("locked_date")
                        .HasColumnType("datetime");

                    b.Property<DateTime>("StartDate")
                        .HasColumnName("start_date")
                        .HasColumnType("datetime");

                    b.Property<int>("Status")
                        .HasColumnName("status")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnName("title")
                        .HasColumnType("varchar(200)")
                        .HasMaxLength(200);

                    b.HasKey("Id");

                    b.HasIndex("Status");

                    b.HasIndex("StartDate", "EndDate")
                        .IsUnique();

                    b.ToTable("iterations");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.IterationStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("name")
                        .HasColumnType("varchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("iteration_status");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.ReportingManagerRequest", b =>
                {
                    b.Property<int>("ReportingManagerRequestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("reporting_manager_request_id")
                        .HasColumnType("int");

                    b.Property<int?>("CurrentReportingManagerId")
                        .HasColumnName("current_reporting_manager_id")
                        .HasColumnType("int");

                    b.Property<int>("NewReportingManagerId")
                        .HasColumnName("new_reporting_manager_id")
                        .HasColumnType("int");

                    b.Property<int>("ReportedUserId")
                        .HasColumnName("reported_user_id")
                        .HasColumnType("int");

                    b.Property<ulong>("RequestStatus")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("request_status")
                        .HasColumnType("bit")
                        .HasDefaultValue(0ul);

                    b.HasKey("ReportingManagerRequestId");

                    b.HasIndex("CurrentReportingManagerId");

                    b.HasIndex("NewReportingManagerId");

                    b.HasIndex("ReportedUserId");

                    b.ToTable("reporting_manager_requests");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("ContactNumber")
                        .HasColumnType("VARCHAR")
                        .HasMaxLength(100);

                    b.Property<int>("DepartmentId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(100)")
                        .HasMaxLength(100);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("varchar(100)")
                        .HasMaxLength(100);

                    b.Property<string>("Gender")
                        .HasColumnType("text");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("varchar(100)")
                        .HasMaxLength(100);

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("text");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("text");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ReportingManagerId")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("varchar(100)")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("application_users");
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.Iteration", b =>
                {
                    b.HasOne("EmployeePerfomanceEvaluationSystem.Models.IterationStatus", "IterationStatus")
                        .WithMany()
                        .HasForeignKey("Status")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EmployeePerfomanceEvaluationSystem.Models.ReportingManagerRequest", b =>
                {
                    b.HasOne("EmployeePerfomanceEvaluationSystem.Models.User", "CurrentReportingManager")
                        .WithMany()
                        .HasForeignKey("CurrentReportingManagerId");

                    b.HasOne("EmployeePerfomanceEvaluationSystem.Models.User", "NewReportingManager")
                        .WithMany()
                        .HasForeignKey("NewReportingManagerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EmployeePerfomanceEvaluationSystem.Models.User", "ReportedUser")
                        .WithMany("ReportingManagerRequests")
                        .HasForeignKey("ReportedUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
