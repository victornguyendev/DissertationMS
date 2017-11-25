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
            },
            createConsultant: function (data, callback) {
                console.log(data);
                var data_request = {
                    'CustomerName': data.CustomerName,
                    'CustomerNumPhone':data.CustomerNumPhone,
                    'CustomerEmail' : data.CustomerEmail,
                    'PostSummary' : data.PostSummary,
                    'PostDescription' : data.PostDescription,
                    'PostAmount' : data.PostAmount,
                    'Content': data.Content,
                    'Datetime': data.Datetime,
                    'NumChar': data.NumChar,
                    'SourceId': data.SourceId,
                    'WebsiteId': data.WebsiteId,
                    'CounselorId': data.CounselorId,
                    'IsPotential' : data.IsPotential,  
                };
                console.log(data_request);
                var config = {
                    header: {
                        'Content-Type': 'application/json',
                    }
                }
                $http.post(api + 'consultationlog/create', data_request, config)
                    .then(function success(res) {
                        callback(res.data);
                    }, function error(err) {
                        $log.log(err)
                    });
            },

            consultantDetail: function (id, callback) {
                var config = {
                    header: {
                        'Content-Type': 'application/json'
                    }
                }
                $http.get(api + 'consultationlog/get?id=' + id, config)
                    .then(function success(res) {
                        callback(res.data);
                    }, function error(err) {
                        $log.log(err)
                    });
            },
        }
    }
})();