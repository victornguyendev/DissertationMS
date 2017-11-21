(function() {
	'use strict';

	angular
	.module('angular')
	.factory('customer', customerFactory);

	/** @ngInject */
	function customerFactory(api, $log, $http) {
		return {
			listCustomers: function(callback) {
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
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
			}
		}
	}
})();
