using EmployeePerfomanceEvaluationSystem.ViewModels.Responses.User;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Mappers
{
    public class UserServiceMapper
    {
        public static UserResponseModel ToUser(DbDataReader dataReader)
        {
            UserResponseModel userResponseModel = null;
            if(dataReader.Read())
            {
                userResponseModel = new UserResponseModel() {

                    UserId = int.Parse(dataReader["id"].ToString()),
                    FirstName = dataReader["firstName"].ToString(),
                    LastName = dataReader["lastName"].ToString(),
                    Email = dataReader["email"].ToString(),
                    ContactNumber = dataReader["contactNumber"].ToString(),
                    Gender = dataReader["gender"].ToString(),
                    IsAdmin = bool.Parse(dataReader["isAdmin"].ToString()),
                    RoleId = int.Parse(dataReader["roleId"].ToString()),
                    RoleName = dataReader["role_name"].ToString(),
                    DepartmentId = int.Parse(dataReader["departmentId"].ToString()),
                    DepartmentName = dataReader["department_name"].ToString(),
                    ReportingManager = dataReader["manager"].ToString()
                };
            };

            return userResponseModel;
        }
    }
}
