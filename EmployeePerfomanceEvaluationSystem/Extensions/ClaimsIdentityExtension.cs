using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Extensions
{
    public static class ClaimsIdentityExtension
    {
        public static int GetUserIdClaim(this ClaimsPrincipal claimsPrincipal)
        {
            int userId = 0;

            var claim = claimsPrincipal.Claims?.FirstOrDefault(x => x.Type.Equals("Id",
                                                                        StringComparison.OrdinalIgnoreCase))?.Value;
            if(null != claim)
            {
                userId = int.Parse(claim);
            }

            return userId;
        }

        public static bool IsAdmin(this ClaimsPrincipal claimsPrincipal)
        {
            bool isAdmin = false;

            var claim = claimsPrincipal.Claims?.FirstOrDefault(x => x.Type.Equals("IsAdmin",
                                                                        StringComparison.OrdinalIgnoreCase))?.Value;
            if (null != claim)
            {
                isAdmin = bool.Parse(claim);
            }

            return isAdmin;
        }
    }
}
