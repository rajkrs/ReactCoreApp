using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ReactCore.Api.Core.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace AngCore.Api.Core.Middlewares
{
    public class CommonResponseMiddleware
    {
        #region Private Fields

        private readonly ILogger<CommonResponseMiddleware> _logger;
        private readonly RequestDelegate _next;

        #endregion Private Fields

        #region Public Constructors

        public CommonResponseMiddleware(
            RequestDelegate next,
            ILogger<CommonResponseMiddleware> logger
           )
        {
            _next = next;
            _logger = logger;
        }

        #endregion Public Constructors

        #region Public Properties

        public int MyProperty { get; set; }

        #endregion Public Properties

        #region Public Methods

        public async Task Invoke(HttpContext context)
        {
            var requestId = context.Request.Headers["id"];
            var responseId = Guid.NewGuid().ToString();
            context.Response.Headers.Add("response-id", responseId);
            
            await _next.Invoke(context);
        }
        
        #endregion Public Methods
    }
}
