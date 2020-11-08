using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class create_goals_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.CreateTable(
                name: "goals",
                columns: table => new
                {
                    goal_id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    goal_name = table.Column<string>(maxLength: 500, nullable: false),
                    IsActive = table.Column<ulong>(type: "bit", nullable: false, defaultValue: 1ul)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_goals", x => x.goal_id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_goals_goal_name",
                table: "goals",
                column: "goal_name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "goals");
        }
    }
}
