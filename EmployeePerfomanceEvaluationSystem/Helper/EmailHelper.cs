using EmployeePerfomanceEvaluationSystem.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Helper
{
    public static class EmailHelper
    {
        public static string PasswordResetTemplateGenerator(User user, string token, 
                                                            string passwordResetTemplate, 
                                                            IConfiguration configuration)
        {
            var contextDictionary = new Dictionary<string, string>();
            contextDictionary.Add("auth.email.password_reset_token", token);
            contextDictionary.Add("auth.email.user_name", user.UserName);
            contextDictionary.Add("auth.email.first_name", user.FirstName);
            contextDictionary.Add("auth.email.password_reset_url", string.Format("{0}/reset-password/{1}", 
                                                                                  configuration["host:server"], token));
            passwordResetTemplate = GenerateEmailBody(passwordResetTemplate, contextDictionary);

            return passwordResetTemplate;
        }

        
        private static string GenerateEmailBody(string template, Dictionary<string, string> contextDictionary)
        {
            template = substituteFieldTokens(template, contextDictionary);
            return template;
        }

        private static string substituteFieldTokens(string template, Dictionary<string, string> dictionary)
        {
            //extract the field names
            var tokenMatches = Regex.Matches(template, @"\{\{([^\{\}]+)\}\}"); //      {{fieldName}}

            //replace all the field tokens with values from the dictionary (if found)
            foreach (Match tokenMatch in tokenMatches)
            {
                string fieldToken = tokenMatch.Value;
                string key = tokenMatch.Groups[1].Value;

                if (dictionary.ContainsKey(key))
                {
                    template = template.Replace(fieldToken, dictionary[key]);
                }
            }

            return template;
        }
    }
}
