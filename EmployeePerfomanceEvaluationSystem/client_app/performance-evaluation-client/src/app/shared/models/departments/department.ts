export class Department {

    departmentId: number;
    departmentName: string;

    constructor(departmentId, departmentName) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
    }

    static FormDepartmentModelArray(response: any): Array<Department> {

        var departmentArray: Array<Department> = new Array<Department>();
        for (var data of response.data) {
            var department = new Department(data.id, data.departmentName);
            departmentArray.push(department);
        }

        return departmentArray;
    }
}