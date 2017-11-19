(function() {
'use strict';

angular
	.module('angular')
	.controller('PostController', PostController);

	/** @ngInject */
	function PostController(post) {
		var vm = this;

		post.listPosts(function(res) {
			vm.listpost = res;
		})
	}
})();
