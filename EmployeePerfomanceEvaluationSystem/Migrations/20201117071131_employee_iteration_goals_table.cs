using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class employee_iteration_goals_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "employee_iteration_goals",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    employee_id = table.Column<int>(nullable: false),
                    reporting_manager_id = table.Column<int>(nullable: false),
                    iteration_id = table.Column<int>(nullable: false),
                    goal_id = table.Column<int>(nullable: false),
                    weightage = table.Column<int>(nullable: false),
                    description = table.Column<string>(maxLength: 300, nullable: false),
                    created_date = table.Column<DateTime>(type: "datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employee_iteration_goals", x => x.id);
                    table.ForeignKey(
                        name: "FK_employee_iteration_goals_application_users_employee_id",
                        column: x => x.employee_id,
                        principalTable: "application_users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employee_iteration_goals_goals_goal_id",
                        column: x => x.goal_id,
                        principalTable: "goals",
                        principalColumn: "goal_id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_employee_iteration_goals_iterations_iteration_id",
                        column: x => x.iteration_id,
                        principalTable: "iterations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employee_iteration_goals_application_users_reporting_manager~",
                        column: x => x.reporting_manager_id,
                        principalTable: "application_users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

     
            migrationBuilder.CreateIndex(
                name: "IX_employee_iteration_goals_employee_id_iteration_id",
                table: "employee_iteration_goals",
                columns: new[] { "employee_id", "iteration_id" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employee_iteration_goals");
        }
    }
}
