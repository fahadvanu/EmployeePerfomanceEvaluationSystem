export class EmployeeIterationRatingModel {
    isManagerRequested: boolean;
    goals_ratings: Array<EmployeeGoalRatings> = new Array<EmployeeGoalRatings>();

    static FormEmployeeIterationRatingModel(response: any): EmployeeIterationRatingModel {

        let employeeIterationRatingModel: EmployeeIterationRatingModel = new EmployeeIterationRatingModel();
        employeeIterationRatingModel.isManagerRequested = response.data.isManagerRequested;
        employeeIterationRatingModel.goals_ratings = EmployeeGoalRatings.FormEmployeeGoalRatingModelArray(response.data.goalRatings);

        return employeeIterationRatingModel;
    }
}

export class EmployeeGoalRatings {

    iterationGoalId: number;
    goalTitle: string;
    weightage: number;
    description: string;
    iterationRatingId: number;
    employeeRatingId: number;
    employeeComments: string;
    managerRatingId: number;
    managerComments: string;

    static FormEmployeeGoalRatingModelArray(goal_ratings: any): Array<EmployeeGoalRatings> {

        var goal_ratings_array: Array<EmployeeGoalRatings> = new Array<EmployeeGoalRatings>();
        for (var rating of goal_ratings.result) {

            let goal_rating = new EmployeeGoalRatings();
            goal_rating.iterationGoalId = rating.iterationGoalId;
            goal_rating.goalTitle = rating.goalTitle;
            goal_rating.weightage = rating.weightage;
            goal_rating.description = rating.description;
            goal_rating.iterationRatingId = rating.iterationRatingId;
            goal_rating.employeeRatingId = rating.employeeRatingId;
            goal_rating.employeeComments = rating.employeeComments;
            goal_rating.managerRatingId = rating.managerRatingId;
            goal_rating.managerComments = rating.managerComments;

            goal_ratings_array.push(goal_rating);
        }

        return goal_ratings_array;
    }
}
