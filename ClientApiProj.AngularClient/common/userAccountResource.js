(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("userAccountResource",
                ["$resource",
                 "appSettings",
                    userAccountResource])

    function userAccountResource($resource, appSettings) {
        return {
            registration: $resource(appSettings.serverPath + "/api/Account/Register", null,
                    {
                        'registerUser': { method: 'POST' }
                    }),
            login: $resource(appSettings.serverPath + "/Token", null,
                    {
                        'loginUser': {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            // by default, $resource will convert a request body to JSON
                            // but we need to convert the request body into x-www-form-urlencodedb
                            // to do that, do the below customization
                            transformRequest: function (data, headersGetter) {
                                var str = [];
                                for (var d in data)
                                    str.push(encodeURIComponent(d) + "=" +
                                                        encodeURIComponent(data[d]));
                                return str.join("&");
                            }

                        }
                    })
        }
    }
})();
