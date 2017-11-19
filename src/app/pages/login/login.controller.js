(function() {
'use strict';

angular
	.module('angular')
	.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController(user, $localStorage, $window) {
		var vm = this;

		if($localStorage.user) {
			$window.location = "/";
		}

		vm.user = {};

		vm.login = function() {
			user.login(vm.user, function(res) {
				$localStorage.user = res;
				$window.location = "/";
			});
		}
	}
})();
