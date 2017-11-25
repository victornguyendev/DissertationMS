(function () {
    'use strict';

    angular
        .module('angular')
        .controller('CustomerController', CustomerController);

    /** @ngInject */
    function CustomerController(customer, $localStorage, $window, $stateParams) {
        var vm = this;
        var id = $stateParams.id;

        customer.listCustomers(function (res) {
            if (res) {
                console.log(res.Data);
                vm.customers = res.Data;
            }
        });

        vm.viewDetail = function (id) {
            $window.location = "/customer/" + id;
        }
        
        if (id) {
            customer.customerDetail(id, function (res) {
                vm.customerDetail = res;
            })
        }
    }
})();
