export class Role {

    roleId: number;
    roleName: string;

    constructor(roleId, roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }

    static FormRolesModelArray(response: any): Array<Role> {

        var rolesArray: Array<Role> = new Array<Role>();
        for (var data of response.data) {
            var role = new Role(data.roleId, data.roleName);
            rolesArray.push(role);
        }

        return rolesArray;
    }
}