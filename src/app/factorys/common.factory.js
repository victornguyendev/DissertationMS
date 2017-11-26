(function() {
	'use strict';

	angular
	.module('angular')
	.factory('common', commonFactory);

	/** @ngInject */
	function commonFactory(api, $log, $http) {
		return {
			listWebsites: function(callback) {
				var config = {
					header: {
						'Content-Type': 'application/json'
					}
				}
				$http.get(api + 'common/websites', config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
			},
			listSources: function(callback) {
				var config = {
					header: {
						'Content-Type': 'application/json'
					}
				}
				$http.get(api + 'common/sources', config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
			},
		}	
	}
})();