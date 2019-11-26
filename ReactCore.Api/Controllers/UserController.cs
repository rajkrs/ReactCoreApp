using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCore.Api.ViewModel.User;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCore.Api.Controllers
{

    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public UserInfoRes Get(int id) =>
             new UserInfoRes { Id = id, Name = "Raj Kumar", Address = "New Delhi, 110092"};

    }
}
