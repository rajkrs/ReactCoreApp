using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactCore.Api.ViewModel.Account;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCore.Api.Controllers
{

    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public LoginResponseDto Get(int id) =>
             new LoginResponseDto { Id = id, Name = "Raj Kumar", Address = "New Delhi, 110092"};

    }
}
