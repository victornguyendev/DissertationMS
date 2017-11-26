(function() {
	'use strict';

	angular
	.module('angular')
	.factory('collaborator', collaboratorFactory);

	/** @ngInject */
	function collaboratorFactory(api, $log, $http) {
		return {
			listCollaborators: function(callback) {
				var data_request = {
					'Index': 1,
					'Size': 100
				};

				var config = {
					header: {
						'Content-Type': 'application/json'
					}
				};

				$http.post(api + 'collaborators/filter', data_request, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
			}
		}
	}
})();
