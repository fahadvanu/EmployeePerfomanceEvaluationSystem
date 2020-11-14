import { ApiResponse } from '../api-responses/api-response';

export class UserResponseModel {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    gender: string;
    gender_display: string;
    isAdmin: boolean;
    roleId: number;
    roleName: string;
    departmentId: number;
    departmentName: string;
    reportingManagerId: number;
    reportingManager: string;

    constructor() { }

    static formUserResponseModel(response: ApiResponse): UserResponseModel {
        let user = new UserResponseModel();
        user.id = response.data.userId;
        user.firstName = response.data.firstName;
        user.lastName = response.data.lastName;
        user.email = response.data.email;
        user.contactNumber = response.data.contactNumber;
        user.gender = response.data.gender;
        user.gender_display = (response.data.gender == 'M') ? 'Male' : 'Female';
        user.isAdmin = response.data.isAdmin;
        user.roleId = response.data.roleId;
        user.roleName = (response.data.roleName == "") ? 'N/A' : response.data.roleName;
        user.departmentId = response.data.departmentId;
        user.departmentName = (response.data.departmentName == "") ? 'N/A' : response.data.departmentName;
        user.reportingManagerId = response.data.reportingManagerId;
        user.reportingManager = (response.data.reportingManager == "") ? 'N/A'
                                                                         : response.data.reportingManager;

        return user;
    }

    static formUserResponseModelArray(response: ApiResponse): Array<UserResponseModel> {

        let users = new Array<UserResponseModel>();
        for (let user of response.data) {

            let user_response_model = new UserResponseModel();
            user_response_model.id = user.userId;
            user_response_model.firstName = user.firstName;
            user_response_model.lastName = user.lastName;
            user_response_model.email = user.email;
            user_response_model.contactNumber = user.contactNumber;
            user_response_model.gender = user.gender;
            user_response_model.gender_display = (user.gender == 'M') ? 'Male' : 'Female';
            user_response_model.isAdmin = user.isAdmin;
            user_response_model.roleId = user.roleId;
            user_response_model.roleName = (user.roleName == "") ? 'N/A' : user.roleName;
            user_response_model.departmentId = user.departmentId;
            user_response_model.departmentName = (user.departmentName == "") ? 'N/A' : user.departmentName;
            user_response_model.reportingManagerId = user.reportingManagerId;
            user_response_model.reportingManager = (user.reportingManager == "") ? 'N/A'
                                                                 : user.reportingManager;
            users.push(user_response_model)
        }

        return users;
    }
}