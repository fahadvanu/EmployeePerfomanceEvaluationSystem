using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class employee_iteration_state_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "employee_iteration_state",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    iteration_id = table.Column<int>(nullable: false),
                    employee_id = table.Column<int>(nullable: false),
                    reporting_manager_id = table.Column<int>(nullable: false),
                    iteration_state_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employee_iteration_state", x => x.id);
                    table.ForeignKey(
                        name: "FK_employee_iteration_state_application_users_employee_id",
                        column: x => x.employee_id,
                        principalTable: "application_users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employee_iteration_state_iterations_iteration_id",
                        column: x => x.iteration_id,
                        principalTable: "iterations",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employee_iteration_state_iteration_states_iteration_id",
                        column: x => x.iteration_id,
                        principalTable: "iteration_states",
                        principalColumn: "iteration_state_id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_employee_iteration_state_application_users_reporting_manager~",
                        column: x => x.reporting_manager_id,
                        principalTable: "application_users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_employee_iteration_state_employee_id_iteration_id",
                table: "employee_iteration_state",
                columns: new[] { "employee_id", "iteration_id" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employee_iteration_state");
        }
    }
}
