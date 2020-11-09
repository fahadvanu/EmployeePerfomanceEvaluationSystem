using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class reporting_manager_requests_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "reporting_manager_requests",
                columns: table => new
                {
                    reporting_manager_request_id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    reported_user_id = table.Column<int>(nullable: false),
                    current_reporting_manager_id = table.Column<int>(nullable: false),
                    new_reporting_manager_id = table.Column<int>(nullable: false),
                    request_status = table.Column<ulong>(type: "bit", nullable: false, defaultValue: 0ul)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_reporting_manager_requests", x => x.reporting_manager_request_id);
                    table.ForeignKey(
                        name: "FK_reporting_manager_requests_application_users_reported_user_id",
                        column: x => x.reported_user_id,
                        principalTable: "application_users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_reporting_manager_requests_reported_user_id",
                table: "reporting_manager_requests",
                column: "reported_user_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "reporting_manager_requests");
        }
    }
}
