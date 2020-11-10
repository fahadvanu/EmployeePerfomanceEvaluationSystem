export class ApproveReportingManagerRequestModel {
    reportingManagerRequestId: number;
    reportedUserId: number;
    reportedUserEmail: string;
    currentReportingManagerId: number;
    currentReportingManagerEmail: string;
    newReportingManagerId: number;
    newReportingManagerEmail: string;
    status: boolean;
}