using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCore.Api.Core.Enums;
using ReactCore.Api.Core.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Api.Controllers
{

    public class ValueUserInfo {
        public string UserId { get; set; }
        public string Name { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        IHostingEnvironment _hostingEnvironment;
        public ValuesController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        // GET api/values
        [HttpGet]
        // public ActionResult<IEnumerable<string>> Get()
        public ActionResult<IEnumerable<string>> Get()
        {
            //throw new Exception("My custom error");
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "Value";
        }




        [HttpGet("data1/{id}")]
        [Produces(typeof(List<string>))]
        public ActionResult<ActionResponse<List<string>>> Get1(string id)
        {

            var formattedResponse = new ActionResponse<List<string>>
            {
                Status = Core.Enums.ResponseStatus.Success,
                Data = new List<string>() { "Raj", "Raja" },
            }; ;

            return Ok(formattedResponse);
        }



        [HttpGet("data2/{id}")]
        [Produces(typeof(List<string>))]
        public ActionResponse<List<string>> Get(string id)
        {

            var formattedResponse = new ActionResponse<List<string>>
            {
                Status = Core.Enums.ResponseStatus.Success,
                Data = new List<string>() { "Raj", "Raja" },
            }; ;

            return formattedResponse;
        }

        [HttpGet("data3/{id}")]
        [Produces(typeof(ValueUserInfo))]
        public ActionResult<ActionResponse<ValueUserInfo>> Get2(string id)
        {

            var formattedResponse = new ActionResponse<ValueUserInfo>
            {
                Status = Core.Enums.ResponseStatus.Success,
                Data = new ValueUserInfo { UserId = id, Name = "Raj Kumar" },
                Messages = new List<Message>(){ new Message {
                        Type = MessageType.Info,
                        Code = MessageCode.Authentication_Info,
                        Value = "Your password would be expired in next 10 days.",
                    }
                }
            }; 

            return Ok(formattedResponse);
        }


        // GET api/values/5
       


        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
