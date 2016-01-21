(function () {
    "use strict";

    // There are two methods in AngularJs for invoking a Web Api method : 1. $http and 2. $resource
    // $http = core of angularjs. No third party, used with Promise Object, asynchronous
    // $resource = separate Angular component : angular-resource, asbtraction on top of $http, requires less code
    // we will be using $resource

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                 "appSettings",
                    productResource])

    // factory function
    function productResource($resource, appSettings) {

        return $resource(appSettings.serverPath + "/api/products/:id", null,

        // second parameter is to SET a default value for {:id} parameter. null will not set any default value so that we can customize
        // third argument is an object represents a set of custom actions
        // in our case, we have defined a custom action called : update. this name can be anything ex : update1, updateYeasin etc
        // with this we are defining that, for our custom method 'update', send a PUT request to the server
        // and thats all need to do for a custom method in $resource
            {
                'update': { method: 'PUT' }
            });
    }
}());

