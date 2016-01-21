(function () {
    "use strict";

    angular
        .module("common.services",
                    ["ngResource"])
    	.constant("appSettings",
        {
            serverPath: "http://localhost:6359"
            //, productEdit: "http://localhost:6359"
        });
}());
