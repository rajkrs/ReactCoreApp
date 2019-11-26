using ReactCore.Api.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace ReactCore.Api.Core.Filters
{
    public class CommonResponseFilter : IActionFilter
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
                if (
                    (objectResult.DeclaredType == null && typeof(ActionResult).Name == methodType.Name)
                    ||
                    (objectResult.DeclaredType != null && typeof(ActionResponse<>).Name != objectResult.DeclaredType?.Name)
                    )
                {
                    var formattedResponse = new ActionResponse<object>
                    {
                        Status = Enums.ResponseStatus.Success,
                        Data = objectResult.Value
                    }; ;
                    context.Result = new ObjectResult(formattedResponse);
                }

                var requestId = context.HttpContext.Request.Headers["id"];
                var responseId = Guid.NewGuid().ToString();
                context.HttpContext.Response.Headers.Add("id", responseId);

            }
        }
    }

}
