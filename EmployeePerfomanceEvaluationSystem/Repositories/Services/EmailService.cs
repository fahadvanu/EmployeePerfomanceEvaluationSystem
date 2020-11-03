using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Services
{
    public class EmailService : IEmailService
    {
        private SmtpServerSettings _smtpserverSettings;
        private ILogger<EmailService> _logger;

        public EmailService(SmtpServerSettings smtpserverSettings,
                            ILogger<EmailService> logger)
        {
            _smtpserverSettings = smtpserverSettings;
            _logger = logger;
        }

        public async Task SendEmail(EmailModel emailModel)
        {
            var emailMessage = CreateEmailMessage(emailModel);
            await SendEmailToUser(emailMessage);
        }

        private MimeMessage CreateEmailMessage(EmailModel emailModel)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress(_smtpserverSettings.From));
            emailMessage.To.Add(emailModel.Reciever);
            emailMessage.Subject = emailModel.Subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html) 
                                        { Text = emailModel.Message };
            return emailMessage;
        }

        private async Task SendEmailToUser(MimeMessage emailMessage)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    await client.ConnectAsync(_smtpserverSettings.SmtpServer, _smtpserverSettings.Port, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    await client.AuthenticateAsync(_smtpserverSettings.Username, _smtpserverSettings.Password);
                    await client.SendAsync(emailMessage);
                }
                catch(Exception ex)
                {
                    _logger.LogWarning("Exception occured while sending email using MailKit", ex);
                    throw;
                }
                finally
                {
                    await client.DisconnectAsync(true);
                    client.Dispose();
                }
            }
        }
    }
}
