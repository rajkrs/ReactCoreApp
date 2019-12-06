using ReactCore.Api.Core.Enums;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactCore.Api.Core.Models
{
    public class ActionResponse<T>
    {
        public ResponseStatus Status { get; set; }
        public List<Message> Messages { get; set; }
        public T Data { get; set; }

    }

}
