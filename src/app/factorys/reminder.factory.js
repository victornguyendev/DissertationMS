(function() {
	'use strict';

	angular
	.module('angular')
	.factory('reminder', reminderFactory);

	/** @ngInject */
	function reminderFactory(api, $log, $http) {
		return {
			listConsultationLog: function(data, callback) {
				var data_request = data;
				var config = {
					header: {
						'Content-Type': 'application/json'
					}
				}
				$http.post(api + 'posts/remimder', data_request, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
			},
		}
	}
})();
