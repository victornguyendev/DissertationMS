(function () {
    'use strict';

    angular
        .module('angular')
        .factory('consultant', consultantFactory);

    /** @ngInject */
    function consultantFactory(api, $log, $http) {
        return {
            listConsultant: function (callback) {
                var data_request = {
                    'Filter': null,
                    'Sort': null,
                    'Index': 1,
                    'Size': 100
                };
                var config = {
                    header: {
                        'Content-Type': 'application/json',
                    }
                }
                $http.post(api + 'consultationlog/filter', data_request, config)
                    .then(function success(res) {
                        callback(res.data);
                    }, function error(err) {
                        $log.log(err)
                    });
            }
        }
    }
})();