using ClientApiProj.IdentityServer.Config;
using IdentityServer3.Core.Configuration;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientApiProj.IdentityServer
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Map("/identity", idsrvApp =>
            {
                var idServerServiceFactory = new IdentityServerServiceFactory()
                .UseInMemoryClients(Clients.Get())
                .UseInMemoryScopes(Scopes.Get())
                .UseInMemoryUsers(Users.Get());

                var options = new IdentityServerOptions
                {
                    Factory = idServerServiceFactory,
                    SiteName = "Acme Product Management Security Token Service"//,
                    //IssuerUri = 
                };

                idsrvApp.UseIdentityServer(options);
            });
        }
    }
}