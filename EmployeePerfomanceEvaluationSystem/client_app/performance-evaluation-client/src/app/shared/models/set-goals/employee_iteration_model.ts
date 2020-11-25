import { Rating } from '../ratings/rating';

export class EmployeeIterationRatingModel {
    isManagerRequested: boolean;
    goals_ratings: Array<EmployeeGoalRatings> = new Array<EmployeeGoalRatings>();

    static FormEmployeeIterationRatingModel(response: any, ratings: Array<Rating>): EmployeeIterationRatingModel {

        let employeeIterationRatingModel: EmployeeIterationRatingModel = new EmployeeIterationRatingModel();
        employeeIterationRatingModel.isManagerRequested = response.data.isManagerRequested;
        employeeIterationRatingModel.goals_ratings = EmployeeGoalRatings.FormEmployeeGoalRatingModelArray(response.data.isManagerRequested,
                                                                                                            response.data.goalRatings,
                                                                                                            ratings);

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
    employeeRatingWeightage: number = 0;
    employeeComments: string;
    managerRatingId: number;
    managerRatingWeightage: number = 0;
    managerComments: string;
    isManagerRequested: boolean;;

    static FormEmployeeGoalRatingModelArray(isManagerRequested, goal_ratings: any, ratings: Array<Rating>): Array<EmployeeGoalRatings> {

        var goal_ratings_array: Array<EmployeeGoalRatings> = new Array<EmployeeGoalRatings>();
        for (var rating of goal_ratings) {

            let goal_rating = new EmployeeGoalRatings();
            goal_rating.iterationGoalId = rating.iterationGoalId;
            goal_rating.goalTitle = rating.goalTitle;
            goal_rating.weightage = rating.weightage;
            goal_rating.description = rating.description;
            goal_rating.iterationRatingId = (rating.iterationRatingId == null) ? 0 : rating.iterationRatingId;
            goal_rating.employeeRatingId = (rating.employeeRatingId == null) ? '' : rating.employeeRatingId;
            goal_rating.employeeComments = (rating.employeeComments == null) ? '' : rating.employeeComments;
            goal_rating.managerRatingId = (rating.managerRatingId == null) ? '' : rating.managerRatingId;
            goal_rating.managerComments = (rating.managerComments == null) ? '' : rating.managerComments;
            goal_rating.isManagerRequested = isManagerRequested;
            goal_rating.employeeRatingWeightage = this.calculateEmployeeRatingWeightage(rating, ratings)
            goal_rating.managerRatingWeightage = this.calculateManagerRatingWeightage(rating, ratings)

            goal_ratings_array.push(goal_rating);
        }

        return goal_ratings_array;
    }

    private static calculateEmployeeRatingWeightage(rating, ratings: Array<Rating>): number {

        let weightage: number = 0;
        if (rating.employeeRatingId != null) {
            let ratingWeightage = ratings.find(x => x.ratingId == rating.employeeRatingId * 1);
            weightage = this.percentageOfNumber(ratingWeightage.weightage, 100);
        }
        return weightage;

    }

    private static calculateManagerRatingWeightage(rating, ratings: Array<Rating>): number {

        let weightage: number = 0;
        if (rating.managerRatingId != null) {
            let ratingWeightage = ratings.find(x => x.ratingId == rating.managerRatingId * 1);
            weightage = this.percentageOfNumber(ratingWeightage.weightage, 100);
        }
        return weightage;

    }

    private static percentageOfNumber(number, percentage): number {

        return Math.round((number / 100) * percentage);
    }
}
