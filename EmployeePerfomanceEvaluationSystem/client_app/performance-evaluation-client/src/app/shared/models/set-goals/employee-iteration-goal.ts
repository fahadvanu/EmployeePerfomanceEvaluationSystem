export class EmployeeIerationGoal {
    id: number;
    employeeId: number;
    iterationId: number;
    weightage: number;
    goalId: number;
    description: string;
    goalTitle: string;
    reportingManagerId: number;
    lastUpdated: Date;

    static FormEmployeeIterationGoalModelArray(response: any): Array<EmployeeIerationGoal> {

        var employee_iteration_goals: Array<EmployeeIerationGoal> = new Array<EmployeeIerationGoal>();
        for (var data of response.data) {

            var goal = new EmployeeIerationGoal();
            goal.id = data.id;
            goal.employeeId = data.employeeId;
            goal.iterationId = data.iterationId;
            goal.weightage = data.weightage;
            goal.goalId = data.goalId;
            goal.description = data.description;
            goal.goalTitle = data.goalTitle;
            goal.reportingManagerId = data.reportingManagerId;
            goal.lastUpdated = data.lastUpdated;

            employee_iteration_goals.push(goal);
        }

        return employee_iteration_goals;
    }
}