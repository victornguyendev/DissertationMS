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
			$http.post(api + 'login/authorize', data_request, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
		},

		loginInfo: function(token, callback) {
			var config = {
				header: {
					'Content-Type': 'application/json'
				}
			}
			$http.get(api + 'login/info?token=' + token, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
		},

		logout: function(token, callback) {
			var config = {
				header: {
					'Content-Type': 'application/json'
				}
			}
			$http.get(api + 'login/logout?token=' + token, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
		}
	}
}
})();
