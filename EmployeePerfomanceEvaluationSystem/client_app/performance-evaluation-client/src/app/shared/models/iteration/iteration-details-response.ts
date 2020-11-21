import { IterationStatus } from './iteration-reponse-model';

export class IterationDetailsResponse {

    iterationId: number;
    title: string;
    startDate: string;
    endDate: string;
    status: IterationStatus;
    createdDate: string;
    activatedDate: string;
    iterationStateId: number;

    constructor() {

    }

    static FormIterationDetailsModel(response: any): IterationDetailsResponse{

        let iterationDetails: IterationDetailsResponse = new IterationDetailsResponse();

        iterationDetails.iterationId = response.data.iterationId;
        iterationDetails.title = response.data.title;
        iterationDetails.startDate = response.data.startDate;
        iterationDetails.endDate = response.data.endDate;
        iterationDetails.status = response.data.status;
        iterationDetails.createdDate = response.data.createdDate;
        iterationDetails.activatedDate = response.data.activatedDate;
        iterationDetails.iterationStateId = response.data.iterationStateId;

        return iterationDetails;
    }
}