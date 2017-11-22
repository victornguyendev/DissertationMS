(function() {
'use strict';

angular
	.module('angular')
	.controller('LogoutController', LogoutController);

	/** @ngInject */
	function LogoutController(user, $localStorage, $window) {
		var vm = this;

		if(!$localStorage.user) {
			$window.location = "/login";
		}
		
		var token = $localStorage.user.Token;

		user.logout(token, function(res) {
			delete $localStorage.user;
			$window.location = "/login";
		});
	}
})();
