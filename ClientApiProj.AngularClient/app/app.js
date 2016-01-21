(function () {
    //"use strict";

    var app = angular.module("productManagement",
                            ["ngRoute", "common.services"]);

    app.config(function ($routeProvider, $httpProvider) {

        $routeProvider
            // order of route is very important
            .when("/products", {
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .when("/products/create", {
                templateUrl: "app/products/productCreateView.html",
                controller: "ProductCreateCtrl as vm"
            })
            .when("/products/:productId", {
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl as vm"
            })
            .when("/trips/:tripId/createalbum", {
                templateUrl: "app/trips/tripAlbum.html",
                controller: "tripAlbumController as vm"
            })
            .when("/login", {
                templateUrl: "app/membership/membership.html",
                controller: "membershipController as vm"
            })
           .otherwise({ redirectTo: "/products" });

        
        $httpProvider.interceptors.push(function (appSettings, tokenContainer) {
            return {
                'request': function (config) {

                    
                    // if it's a request to the API, we need to provide the
                    // access token as bearer token.             
                    if (config.url.indexOf(appSettings.serverPath) === 0) {
                        config.headers.Authorization = 'Bearer ' + tokenContainer.getToken().token;
                    }

                    return config;
                }

            };
        }); 

    });

}());