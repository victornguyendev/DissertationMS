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
					'Content-Type': 'application/json'
				}
			}
			$http.post(api + 'posts/filter', data_request, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
		},

		addPost: function(data, callback) {
			console.log(data);
			var data_request = {
				"OrderNumChar": data.OrderNumChar,
				"OrderAmount": data.OrderAmount,
				"CustomerId": data.CustomerId,
				"CustomerName": data.CustomerName,
				"CustomerNumPhone": data.CustomerNumPhone,
				"CustomerEmail": data.CustomerEmail,
				"CustomerGender": data.CustomerGender,
				"Summary": data.Summary,
				"Description": data.Description,
				"CounselorId": data.CounselorId,
				"CollaboratorId": data.CollaboratorId,
				"CollNumChar": data.CollNumChar,
				"SourceId": data.SourceId,
				"WebsiteId": data.WebsiteId	
			};
			var config = {
				header: {
					'Content-Type': 'application/json'
				}
			}
			$http.post(api + 'posts/create', data_request, config)
				.then(function success(res){
					callback(res.data);
				}, function error(err) {
					$log.log(err)
				});
		}
	}
}
})();
