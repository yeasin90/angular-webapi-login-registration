using IdentityServer3.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientApiProj.IdentityServer.Config
{
    public static class Scopes
    {
        public static IEnumerable<Scope> Get()
        {
            return new List<Scope>
            {
                new Scope
                {
                    Name = "productmanagement",
                    DisplayName = "Acme Product Management",
                    Description = "Allow the application to manage galleries on your behalf",
                    Type = ScopeType.Resource
                }
            };
        }
    }
}