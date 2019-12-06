using ReactCore.Api.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Data.SqlClient;
using ReactCore.Api.Core.Enums;

namespace ReactCore.Api.Core.Filters
{
    public class CommonExceptionFilter : IExceptionFilter
    {

        public void OnException(ExceptionContext context)
        {
            var methodType = (context.ActionDescriptor as ControllerActionDescriptor).MethodInfo.ReturnType;

            var formattedResponse = new ActionResponse<object>();
            formattedResponse.Data = null;

           
            if (context.Exception is UnauthorizedAccessException)
            {
                formattedResponse.Status = ResponseStatus.Failure;
                formattedResponse.Messages = new System.Collections.Generic.List<Message> {
                    new Message {
                        Code = Enums.MessageCode.Authentication_Error,
                        Type = Enums.MessageType.Error,
                        Value = context.Exception.GetBaseException().Message
                    }
                };
            }
            else
            {

                formattedResponse.Status = ResponseStatus.Failure;
                formattedResponse.Messages = new System.Collections.Generic.List<Message> {
                    new Message {
                        Code = Enums.MessageCode.Other_Error,
                        Type = Enums.MessageType.Error,
                        Value = context.Exception.GetBaseException().Message
                    }
                };

            }

            context.Result = new ObjectResult(formattedResponse);

         

        }
    }
}


