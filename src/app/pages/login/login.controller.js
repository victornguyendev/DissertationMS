(function() {
'use strict';

angular
	.module('angular')
	.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController(user) {
		var vm = this;
		vm.user = {};

		vm.login = function() {
			user.login(vm.user, function(res) {
				console.log(res);
			});
		}
	}
})();
