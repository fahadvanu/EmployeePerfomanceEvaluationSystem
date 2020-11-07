using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ValidationAttributes
{
    public class EnforceValueNotEqualToZeroAttribute : ValidationAttribute
    {
        public EnforceValueNotEqualToZeroAttribute(string message = "The {0} field is required.") 
                    : base(message) { }

        public override bool IsValid(object value)
        {
            return int.Parse(value.ToString()) > 0;
        }
    }
}
