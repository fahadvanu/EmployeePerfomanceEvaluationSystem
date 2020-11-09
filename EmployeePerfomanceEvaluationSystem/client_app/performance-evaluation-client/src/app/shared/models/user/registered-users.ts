export class RegisteredUsers {

    userId: number;
    email: string;

    constructor(userId, email) {
        this.userId = userId;
        this.email = email;
    }

    static FormRegisterUsersModelArray(response: any): Array<RegisteredUsers> {

        var registeredUsersArray: Array<RegisteredUsers> = new Array<RegisteredUsers>();
        for (var data of response.data) {
            var user = new RegisteredUsers(data.userId, data.email);
            registeredUsersArray.push(user);
        }

        return registeredUsersArray;
    }
}