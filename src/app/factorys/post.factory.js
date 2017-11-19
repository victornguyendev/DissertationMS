(function() {
'use strict';

angular
	.module('angular')
	.factory('post', postFactory);

/** @ngInject */
function postFactory(api, $log, $http) {
	return {
		listPosts: function(callback) {
			var data_request = {
				'Filter': null,
				'Sort': null,
				'Index':1,
				'Size': 100
			};
			var config = {
				header: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				}
			}
			$http.post(api + 'posts/filter', data_request, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
		}
	}
}
})();
