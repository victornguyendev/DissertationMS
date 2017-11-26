
(function () {
    'use strict';

    angular
        .module('angular')
        .factory('interactive', interactiveFactory);

    /** @ngInject */
    function interactiveFactory(api, $log, $http) {
        return {
            addInteractive: function (data, callback) {
                console.log(data);
                var data_request = {
                    "Content": data.Content,
                    "DateTime": data.DateTime,
                    "ExpectedActionContent": data.ExpectedActionContent,
                    "ExpectedActionDateTime": data.ExpectedActionDateTime,
                    "PostId": data.PostId
                };
                console.log(data_request);
                var config = {
                    header: {
                        'Content-Type': 'application/json'
                    }
                }
                $http.post(api + 'interactivelogs/create', data_request, config)
                    .then(function success(res) {
                        callback(res.data);
                    }, function error(err) {
                        $log.log(err)
                    });
            },
            listInteractives: function (data, callback) {
                var data_request = {
                    "Index": 1,
                    "Size": 100,
                    'PostId' : null,
                    'StartDateTime': data.StartDateTime,
                    'EndDateTime': data.EndDateTime
                };
                var config = {
                    header: {
                        'Content-Type': 'application/json'
                    }
                }
                $http.post(api + 'interactivelogs/filter', data_request, config)
                    .then(function success(res) {
                        callback(res.data);
                    }, function error(err) {
                        $log.log(err)
                    });
            },
        }
    }
})();
