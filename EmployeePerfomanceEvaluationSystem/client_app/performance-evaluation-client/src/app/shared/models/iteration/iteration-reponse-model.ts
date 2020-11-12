export class IterationResponseModel {

    iterationId: number;
    title: string;
    startDate: string;
    endDate: string;
    status: IterationStatus;
    createdDate: string;
    activatedDate: string;
    lockedDate: string;

    constructor() {

    }

    static FormIterationModelArray(response: any): Array<IterationResponseModel> {

        var iterationArray: Array<IterationResponseModel> = new Array<IterationResponseModel>();
        for (var data of response.data) {
            var iteration = new IterationResponseModel();
            iteration.iterationId = data.iterationId;
            iteration.title = data.title;
            iteration.startDate = data.startDate;
            iteration.endDate = data.endDate;
            iteration.status = data.status;
            iteration.createdDate = data.createdDate;
            iteration.activatedDate = data.activatedDate;
            iteration.lockedDate = data.lockedDate;

            iterationArray.push(iteration);
        }

        return iterationArray;
    }
}

export enum IterationStatus {
    NOTACTIVE = 1,
    ACTIVE = 2,
    LOCKED = 3,
    DELETED = 4
}