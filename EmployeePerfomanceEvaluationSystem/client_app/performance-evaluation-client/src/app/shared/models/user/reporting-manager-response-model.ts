export class ReportingManagerResponseModel {
    reportingManagerRequestId: number;
    reportedUserId: number;
    reportedUserEmail: string;
    currentReportingManagerId: number;
    currentReportingManagerEmail: string;
    newReportingManagerId: number;
    newReportingManagerEmail: string;
    status: boolean;

    static FormReportingRequestsModelArray(response: any): Array<ReportingManagerResponseModel> {

        var reportingRequestsArray: Array<ReportingManagerResponseModel> = new Array<ReportingManagerResponseModel>();
        for (var data of response.data) {

            var reportingRequest = new ReportingManagerResponseModel();
            reportingRequest.reportingManagerRequestId = data.reportingManagerRequestId;
            reportingRequest.reportedUserId = data.reportedUserId;
            reportingRequest.reportedUserEmail = data.reportedUserEmail;
            reportingRequest.currentReportingManagerId = data.currentReportingManagerId;
            reportingRequest.currentReportingManagerEmail = data.currentReportingManagerEmail;
            reportingRequest.newReportingManagerId = data.newReportingManagerId;
            reportingRequest.newReportingManagerEmail = data.newReportingManagerEmail;
            reportingRequest.status = data.status;

            reportingRequestsArray.push(reportingRequest);
        }

        return reportingRequestsArray;
    }
}