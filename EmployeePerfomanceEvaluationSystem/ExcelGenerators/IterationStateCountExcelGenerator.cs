using EmployeePerfomanceEvaluationSystem.Constants;
using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.Reports;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ExcelGenerators
{
    public class IterationStateCountExcelGenerator
    {

        private List<IterationStateCountExcel> _iterationStates;
        public IterationStateCountExcelGenerator(List<IterationStateCountExcel> iterationStates)
        {
            this._iterationStates = iterationStates;
        }

        public Stream GenerateIterationStateCountExcelStream()
        {
            using (ExcelPackage excelPackage = new ExcelPackage(new MemoryStream()))
            {
                ExcelWorksheet ws = InitializeWorkSheet(excelPackage);
                if (_iterationStates.Any())
                {
                    AddIterationDetails(ws, _iterationStates.First());
                    SetCellsWidth(ws);
                    InitializeHeaders(ws);
                    AddRows(ws);
                }
                return SaveExcelPageAndFormStream(excelPackage);
            }
        }

        private ExcelWorksheet InitializeWorkSheet(ExcelPackage excelPackage)
        {
            ExcelWorksheet ws = excelPackage.Workbook.Worksheets.Add(IterationStateCountExcelConstant.WORKSHEET_NAME);
            SetTitleCell(ws);
            SetCellsWidth(ws);
            return ws;
        }

        private void SetTitleCell(ExcelWorksheet ws)
        {
            ws.Cells["C1:J1"].Merge = true;
            ws.Cells["C1:J1"].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
            ws.Cells["C1:J1"].Style.Font.Size = 20;
            ws.Cells["C1:J1"].Style.Font.Bold = true;
            ws.Cells["C1:J1"].Style.Font.Name = "Calibri";
            ws.Cells["C1:J1"].Value = IterationStateCountExcelConstant.WORKSHEET_TITLE;
        }

        private void AddIterationDetails(ExcelWorksheet ws, IterationStateCountExcel stateCountExcel)
        {
            ws.Cells[3, 5].Value = IterationStateCountExcelConstant.ITERATION_TITLE;
            ws.Cells[3, 5].Style.Font.Bold = true;
            ws.Cells[3, 6].Value = stateCountExcel.IterationTitle;
            ws.Cells[4, 5].Value = IterationStateCountExcelConstant.ITERATION_START;
            ws.Cells[4, 5].Style.Font.Bold = true;
            ws.Cells[4, 6].Value = stateCountExcel.IterationStartDate.ToString("dd/MM/yyyy");
            ws.Cells[5, 5].Value = IterationStateCountExcelConstant.ITERATION_END;
            ws.Cells[5, 5].Style.Font.Bold = true;
            ws.Cells[5, 6].Value = stateCountExcel.IterationEndDate.ToString("dd/MM/yyyy");

            using (var range = ws.Cells[3, 5, 5, 6])
            {
                range.Style.ShrinkToFit = false;
                range.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
            }
        }

        private void SetCellsWidth(ExcelWorksheet ws)
        {
            //set columns width
            ws.Column(3).Width = 40; //firstname
            ws.Column(4).Width = 50; //lastname
            ws.Column(5).Width = 40; //email
            ws.Column(6).Width = 40; //reporting manager
            ws.Column(7).Width = 40; //role
            ws.Column(8).Width = 40; //department
            ws.Column(9).Width = 45; //iteration state
            ws.Column(10).Width = 45; //rating
        }

        private void InitializeHeaders(ExcelWorksheet ws)
        {
            //Add Headers
            SetHeaderCellSettings(ws);
            SetHeaderTitles(ws);
        }

        private void SetHeaderCellSettings(ExcelWorksheet ws)
        {
            using (var range = ws.Cells[7, 3, 7, 10])
            {
                //set formatting for headers
                range.Style.Font.Bold = true;
                range.Style.Font.Size = 12;
                range.Style.Font.Name = "Calibri";
                range.Style.ShrinkToFit = false;
                range.Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                range.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
            }
        }

        private void SetHeaderTitles(ExcelWorksheet ws)
        {
            //set text for headers
            ws.Cells[7, 3].Value = IterationStateCountExcelConstant.HEADER_FIRSTNAME;
            ws.Cells[7, 4].Value = IterationStateCountExcelConstant.HEADER_LASTNAME;
            ws.Cells[7, 5].Value = IterationStateCountExcelConstant.HEADER_EMAIL;
            ws.Cells[7, 6].Value = IterationStateCountExcelConstant.HEADER_REPORTINGMANAGER;
            ws.Cells[7, 7].Value = IterationStateCountExcelConstant.HEADER_ROLE;
            ws.Cells[7, 8].Value = IterationStateCountExcelConstant.HEADER_DEPARTMENT;
            ws.Cells[7, 9].Value = IterationStateCountExcelConstant.HEADER_ITERATIONSTATE;
            ws.Cells[7, 10].Value = IterationStateCountExcelConstant.HEADER_RATING;
        }

        private void AddRows(ExcelWorksheet ws)
        {
            int rowNumber = 8;
            foreach (IterationStateCountExcel iterationStateCountExcelModel in this._iterationStates)
            {
                SetRowContent(ws, rowNumber, iterationStateCountExcelModel);
                SetRowFormatting(rowNumber, ws);
                rowNumber++;
            }
        }

        private void SetRowContent(ExcelWorksheet ws, int rowNumber, IterationStateCountExcel iterationStateCountExcelModel)
        {
            ws.Cells[rowNumber, 3].Value = iterationStateCountExcelModel.FirstName;
            ws.Cells[rowNumber, 4].Value = iterationStateCountExcelModel.LastName;
            ws.Cells[rowNumber, 5].Value = iterationStateCountExcelModel.Email;
            ws.Cells[rowNumber, 6].Value = iterationStateCountExcelModel.ReportingManager;
            ws.Cells[rowNumber, 7].Value = iterationStateCountExcelModel.Role;
            ws.Cells[rowNumber, 8].Value = iterationStateCountExcelModel.Department;
            ws.Cells[rowNumber, 9].Value = iterationStateCountExcelModel.IterationState;
            ws.Cells[rowNumber, 10].Value = iterationStateCountExcelModel.Rating;
        }

        private void SetRowFormatting(int rowNumber, ExcelWorksheet ws)
        {
            //set rows formatting
            using (var range = ws.Cells[rowNumber, 3, rowNumber, 10])
            {
                range.Style.Font.Bold = false;
                range.Style.ShrinkToFit = false;
                range.Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                range.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                range.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
            }
        }

        private Stream SaveExcelPageAndFormStream(ExcelPackage excelPackage)
        {
            excelPackage.Save();
            return excelPackage.Stream;
        }
    

    }
}
