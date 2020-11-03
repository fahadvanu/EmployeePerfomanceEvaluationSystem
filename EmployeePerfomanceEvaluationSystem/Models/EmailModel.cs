using EmployeePerfomanceEvaluationSystem.Helper;
using Microsoft.Extensions.Configuration;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Models
{
    public class EmailModel
    {
        public MailboxAddress Reciever { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }

        public void FormPasswordResetEmailModel(User user, string token, 
                                                string passwordResetTemplate, IConfiguration configuration)
        {
            Reciever = new MimeKit.MailboxAddress(user.Email);
            Subject = Constants.Constants.PASSWORD_RESET_EMAIL_SUBJECT;
            Message = EmailHelper.PasswordResetTemplateGenerator(user, token, passwordResetTemplate, configuration);         
        }
    }
}

