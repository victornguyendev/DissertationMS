(function () {
	'use strict';

	angular
		.module('angular')
		.factory('customer', customerFactory);

	/** @ngInject */
	function customerFactory(api, $log, $http) {
		return {
			listCustomers: function (callback) {
				var data_request = {
					'Filter': null,
					'Sort': null,
					'Index': null,
					'Size': null
				};

				var config = {
					header: {
						'Content-Type': 'application/json'
					}
				};

				$http.post(api + 'customers/filter', data_request, config)
					.then(function success(res) {
						callback(res.data);
					}, function error(err) {
						$log.log(err)
					});
			},
			addCustomer: function (data, callback) {
				console.log(data);
				var data_request = {
					'FullName': data.FullName,
					'NumPhone': data.NumPhone,
					'Email': data.Email,
				};
				console.log(data_request);
				var config = {
					header: {
						'Content-Type': 'application/json',
					}
				}
				$http.post(api + 'customers/new', data_request, config)
					.then(function success(res) {
						callback(res.data);
					}, function error(err) {
						$log.log(err)
					});
			},

			customerDetail: function (id, callback) {
				var config = {
					header: {
						'Content-Type': 'application/json'
					}
				}
				$http.get(api + 'customers/get?id=' + id, config)
					.then(function success(res) {
						callback(res.data);
					}, function error(err) {
						$log.log(err)
					});
			},
		}
	}
})();
