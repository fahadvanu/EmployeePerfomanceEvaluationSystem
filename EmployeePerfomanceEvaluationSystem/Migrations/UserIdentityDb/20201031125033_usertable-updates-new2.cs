using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeePerfomanceEvaluationSystem.Migrations.UserIdentityDb
{
    public partial class usertableupdatesnew2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<string>(
                name: "NormalizedEmail",
                table: "application_users",
                maxLength: 100,
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedUserName",
                table: "application_users",
                maxLength: 100,
                nullable: false);

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "application_users",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "application_users",
                column: "NormalizedUserName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "EmailIndex",
                table: "application_users");

            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "application_users");

            migrationBuilder.DropColumn(
                name: "NormalizedEmail",
                table: "application_users");

            migrationBuilder.DropColumn(
                name: "NormalizedUserName",
                table: "application_users");
        }
    }
}
