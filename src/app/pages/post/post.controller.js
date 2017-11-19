(function() {
'use strict';

angular
	.module('angular')
	.controller('PostController', PostController);

	/** @ngInject */
	function PostController(post, moment) {
		var vm = this;

		vm.time = "";

		post.listPosts(function(res) {
			vm.listpost = res;
			console.log(res);
			res.Data.forEach(function(value, key) {
				if(value.StatusPaymentCustomer == 1) {
					vm.listpost.Data[key].StatusPaymentCustomer = 'Một phần';
				} else {
					vm.listpost.Data[key].StatusPaymentCustomer = 'Thanh toán đủ';
				}

				if(value.StatusPost == 0) {
					vm.listpost.Data[key].StatusPost = 'Chưa bắt đầu';
				} else if(value.StatusPost == 1) {
					vm.listpost.Data[key].StatusPost = 'Đang làm';
				} else if(value.StatusPost == 2) {
					vm.listpost.Data[key].StatusPost = 'Đã xong';
				} else {
					vm.listpost.Data[key].StatusPost = 'Hủy';
				}
			})
		})
	}
})();
