using ReactCore.Api.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Net;
using ReactCore.Api.Core.Enums;
using System.Collections.Generic;

namespace ReactCore.Api.Core.Filters
{
    public class CommonResponseFormatFilter : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context)
        {
            var requestId = context.HttpContext.Request.Headers["id"];
            if(string.IsNullOrEmpty(requestId)) requestId = Guid.NewGuid().ToString();


            //TODO: check and return pseudo result.
            {

            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            var methodType = (context.ActionDescriptor as ControllerActionDescriptor).MethodInfo.ReturnType;

            if (context.Result is ObjectResult objectResult)
            {
                context.HttpContext.Response.StatusCode = objectResult.StatusCode?? 200;

                if (
                    (objectResult.DeclaredType == null && typeof(ActionResult).Name == methodType.Name)
                    ||
                    (objectResult.DeclaredType != null && typeof(ActionResponse<>).Name != objectResult.DeclaredType?.Name)
                    )
                {
                    var formattedResponse = new ActionResponse<object>();

                    if (context.HttpContext.Response.StatusCode == (int)HttpStatusCode.OK)
                    {
                        formattedResponse.Status = Enums.ResponseStatus.Success;
                        formattedResponse.Data = objectResult.Value;
                    }
                    else
                    {
                        formattedResponse.Status = Enums.ResponseStatus.Failure;
                        formattedResponse.Messages = new List<Message> {
                                new Message {
                                    Code = MessageCode.Other_Error,
                                    Type = MessageType.Error,
                                    Value = (objectResult.Value).ToString()
                                }
                        };
                    }
                    
                    context.Result = new ObjectResult(formattedResponse);
                }

            }
        }
    }

}
