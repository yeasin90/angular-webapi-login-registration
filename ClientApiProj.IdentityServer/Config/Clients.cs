using IdentityServer3.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientApiProj.IdentityServer.Config
{
    public static class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>();
        }
    }
}