using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.ValidationAttributes
{
    public class IterationStatusValueCheckAttribute : ValidationAttribute
    {
        public IterationStatusValueCheckAttribute(string message = "The {0} field is not valid.")
                                                 : base(message) { }

        public override bool IsValid(object value)
        {
            return int.Parse(value.ToString()) == (int)Constants.Constants.ITERATION_STATUS.ACTIVE
                   || int.Parse(value.ToString()) == (int)Constants.Constants.ITERATION_STATUS.LOCKED;
        }
    }
}
