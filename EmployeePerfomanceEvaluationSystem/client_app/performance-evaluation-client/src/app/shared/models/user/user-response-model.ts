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
        user.roleName = response.data.roleName;
        user.departmentId = response.data.departmentId;
        user.departmentName = response.data.departmentName;
        user.reportingManagerId = response.data.reportingManagerId;
        user.reportingManager = (response.data.reportingManager == "") ? 'N/A'
                                                                         : response.data.reportingManager;

        return user;
    }
}