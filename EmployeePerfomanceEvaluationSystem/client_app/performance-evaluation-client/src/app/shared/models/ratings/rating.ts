export class Rating {

    ratingId: number;
    ratingName: string;
    weightage: number;

    constructor(ratingId, ratingName, weightage) {
        this.ratingId = ratingId;
        this.ratingName = ratingName;
        this.weightage = weightage;
    }

    static FormRatingModelArray(response: any): Array<Rating> {

        var ratingArray: Array<Rating> = new Array<Rating>();
        for (var rating of response.data) {
            var ratingModel = new Rating(rating.ratingId, rating.ratingName, rating.weightage);
            ratingArray.push(ratingModel);
        }

        return ratingArray;
    }
}