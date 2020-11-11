using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace EmployeePerfomanceEvaluationSystem.Migrations
{
    public partial class iterations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "iteration_status",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iteration_status", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "iterations",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    title = table.Column<string>(maxLength: 200, nullable: false),
                    start_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    status = table.Column<int>(nullable: false),
                    created_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    activated_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    locked_date = table.Column<DateTime>(type: "datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iterations", x => x.id);
                    table.ForeignKey(
                        name: "FK_iterations_iteration_status_status",
                        column: x => x.status,
                        principalTable: "iteration_status",
                        principalColumn: "id",
                        onDelete: ReferentialAction.NoAction);
                });

          
            migrationBuilder.CreateIndex(
                name: "IX_iterations_start_date_end_date",
                table: "iterations",
                columns: new[] { "start_date", "end_date" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.DropTable(
                name: "iterations");

            migrationBuilder.DropTable(
                name: "iteration_status");

        }
    }
}
