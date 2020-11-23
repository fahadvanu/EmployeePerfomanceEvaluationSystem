using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class employee_iteration_rating : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "employee_iteration_ratings",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    iteration_goal_id = table.Column<int>(nullable: false),
                    employee_rating_id = table.Column<int>(nullable: false),
                    employee_comments = table.Column<string>(maxLength: 200, nullable: true),
                    manager_rating_id = table.Column<int>(nullable: false),
                    manager_comments = table.Column<string>(maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employee_iteration_ratings", x => x.id);
                    table.ForeignKey(
                        name: "FK_employee_iteration_ratings_ratings_employee_rating_id",
                        column: x => x.employee_rating_id,
                        principalTable: "ratings",
                        principalColumn: "rating_id",
                        onDelete: ReferentialAction.NoAction);

                    table.ForeignKey(
                        name: "FK_employee_iteration_ratings_employee_iteration_goals_iteratio~",
                        column: x => x.iteration_goal_id,
                        principalTable: "employee_iteration_goals",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);

                    table.ForeignKey(
                        name: "FK_employee_iteration_ratings_ratings_manager_rating_id",
                        column: x => x.manager_rating_id,
                        principalTable: "ratings",
                        principalColumn: "rating_id",
                        onDelete: ReferentialAction.NoAction);
                });


            migrationBuilder.CreateIndex(
                name: "IX_employee_iteration_ratings_iteration_goal_id",
                table: "employee_iteration_ratings",
                column: "iteration_goal_id",
                unique: true);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employee_iteration_ratings");

        }
    }
}
