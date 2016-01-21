(function () {

    "use strict";

    angular
        .module("productManagement")
        .controller("ProductCreateCtrl",
                        ProductCreateCtrl);

    function ProductCreateCtrl(productResource,$routeParams) {
        var vm = this;

        
        vm.product = new productResource();//{};
        
        vm.submit = function () {
            vm.message = '';

            vm.product.$save(
                function (data) {
                    vm.originalProduct = angular.copy(data);

                    window.location.href = '#/products';
                    //vm.message = "... Save Complete";
                },
                function (response) {
                    vm.message = response.statusText + "\r\n";
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            vm.message += response.data.modelState[key] + "\r\n";
                        }
                    }
                    if (response.data.exceptionMessage)
                        vm.message += response.data.exceptionMessage;
                });
        };
    }
})();