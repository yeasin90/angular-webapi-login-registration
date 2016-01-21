(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("membershipController",
                     ["$http", "userAccountResource", "currentUser", MembershipController]);

    function MembershipController($http, userAccountResource, currentUser) {
        var vm = this;

        vm.message = '';
        vm.userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        vm.registerUser = function () {
            vm.userData.confirmPassword = vm.userData.password;

            userAccountResource.registration.registerUser(vm.userData,
                function (data) {
                    vm.confirmPassword = "";
                    //alert("Success Registration");
                    vm.message = "... Registration successful";
                    vm.login();
                },
                function (response) {
                    vm.isLoggedIn = false;
                    vm.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage)
                        vm.message += response.data.exceptionMessage;

                    // Validation errors
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            vm.message += response.data.modelState[key] + "\r\n";
                        }
                    }
                });
        }

        vm.login = function () {
            // grant_type means how the authentication will be performed. grant_type=password means authentication using a username and password
            vm.userData.grant_type = "password";
            vm.userData.userName = vm.userData.email;

            userAccountResource.login.loginUser(vm.userData,
                function (data) {
                    vm.message = "";
                    vm.password = "";
                    localStorage["access_token"] = data.access_token;
                    currentUser.setProfile(vm.userData.userName, data.access_token);
                    window.location.href = "#/products";
                },
                function (response) {
                    vm.password = "";
                    vm.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage)
                        vm.message += response.data.exceptionMessage;

                    if (response.data.error) {
                        vm.message += response.data.error;
                    }
                });
        }
    }
}());
