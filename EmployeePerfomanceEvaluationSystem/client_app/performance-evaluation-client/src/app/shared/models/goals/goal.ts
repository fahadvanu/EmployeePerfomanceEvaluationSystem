export class Goal {

    goalId: number;
    goalName: string;
    isActive: boolean;

    constructor(goalId, goalName, isActive) {
        this.goalId = goalId;
        this.goalName = goalName;
    }

    static FormGoalModelArray(response: any): Array<Goal> {

        var goalArray: Array<Goal> = new Array<Goal>();
        for (var data of response.data) {
            var goal = new Goal(data.goalId, data.goalName, data.isActive);
            goalArray.push(goal);
        }

        return goalArray;
    }
}