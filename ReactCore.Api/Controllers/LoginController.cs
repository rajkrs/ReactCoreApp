using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCore.Api.ViewModel.Account;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // POST: api/Login
        [HttpPost]
        public ActionResult Post([FromBody] LoginRequestDto loginRequestDto)
        {
            if (loginRequestDto.UserName == "abc" && loginRequestDto.Password == "123")
            {
                return Ok(new LoginResponseDto { Id = 23, Name = "Raj Kumar", Address = "New Delhi, 110092" });
            }
            else {
                return Unauthorized("Invalid credentials.");
            }
        }


        [HttpGet("helpline")]
        [Produces(typeof(string[]))]
        public ActionResult Get()
        {
            //return Ok(new string[] { "blog.raj111@gmail.com", "rajkrs@hotmail.com" });
            return Ok(new string[] { "011-1111", "012-2222", "013-3333", "014-4444" });
        }


    }
}
