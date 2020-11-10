using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class new_reporting_manager : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_reporting_manager_requests_new_reporting_manager_id",
                table: "reporting_manager_requests",
                column: "new_reporting_manager_id");

            migrationBuilder.AddForeignKey(
                name: "FK_reporting_manager_requests_application_users_new_reporting_m~",
                table: "reporting_manager_requests",
                column: "new_reporting_manager_id",
                principalTable: "application_users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_reporting_manager_requests_application_users_new_reporting_m~",
                table: "reporting_manager_requests");

            migrationBuilder.DropIndex(
                name: "IX_reporting_manager_requests_new_reporting_manager_id",
                table: "reporting_manager_requests");
        }
    }
}
