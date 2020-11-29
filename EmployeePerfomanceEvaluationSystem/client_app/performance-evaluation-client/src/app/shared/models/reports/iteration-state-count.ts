import { Constant } from '../../constant/constants';

export class IterationStateCount {
    stateId: number;
    state: string;
    total: number;

    static FormIterationStateCountModelArray(response: any): Array<IterationStateCount> {

        var iterationStateCountArray: Array<IterationStateCount> = new Array<IterationStateCount>();
        for (var data of response.data) {

            let iterationStateCount: IterationStateCount = new IterationStateCount();
            iterationStateCount.stateId = data.state;
            iterationStateCount.state = this.getIterationCurrentState(data.state);
            iterationStateCount.total = data.total;

            iterationStateCountArray.push(iterationStateCount);
        }

        return iterationStateCountArray;
    }

    private static getIterationCurrentState(stateId) {

        if (stateId == Constant.ITERATION_STATE.NOT_STARTED)
            return Constant.NOT_STARTED;

        if (stateId == Constant.ITERATION_STATE.SET_GOALS)
            return Constant.SET_GOALS;

        if (stateId == Constant.ITERATION_STATE.SELF_EVALUATION)
            return Constant.EMPLOYEE_EVALUATION;

        if (stateId == Constant.ITERATION_STATE.MANAGER_EVALUATION)
            return Constant.MANAGER_EVALUATION;

        if (stateId == Constant.ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return Constant.REVIEW_METTING;

        if (stateId == Constant.ITERATION_STATE.COMPLETED)
            return Constant.COMPLETE;

        return Constant.NOT_STARTED;
    }
}