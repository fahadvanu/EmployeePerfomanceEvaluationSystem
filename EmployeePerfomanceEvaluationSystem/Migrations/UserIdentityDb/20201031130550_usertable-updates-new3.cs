using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeePerfomanceEvaluationSystem.Migrations.UserIdentityDb
{
    public partial class usertableupdatesnew3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<bool>(
                name: "IsAdmin",
                table: "application_users",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAdmin",
                table: "application_users");

        }
    }
}
