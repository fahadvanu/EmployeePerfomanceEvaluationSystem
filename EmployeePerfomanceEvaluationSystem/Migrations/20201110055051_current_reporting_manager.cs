using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class current_reporting_manager : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddForeignKey(
                name: "FK_reporting_manager_requests_application_users_current_reporti~",
                table: "reporting_manager_requests",
                column: "current_reporting_manager_id",
                principalTable: "application_users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_reporting_manager_requests_application_users_current_reporti~",
                table: "reporting_manager_requests");
        }
    }
}
