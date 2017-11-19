(function() {
'use strict';

angular
	.module('angular')
	.factory('user', userFactory);

/** @ngInject */
function userFactory(api, $log, $http) {
	return {
		login: function(data, callback) {
			var data_request = {
				'Username': data.username,
				'Password': data.password
			};
			var config = {
				header: {
					'Content-Type': 'application/json'
				}
			}
			$http.post(api + 'Login', data_request, config)
				.then(function success(res){
					callback(res);
				}, function error(err) {
					$log.log(err)
				});
		}
	}
}
})();
