(function() {
	'use strict';

	angular
	.module('angular')
	.controller('PostController', PostController);

	/** @ngInject */
	function PostController(post, collaborator, customer, user, moment, $localStorage) {
		var vm = this;

		var CounselorId = $localStorage.user.UserId;
		var token = $localStorage.user.Token;
		vm.post = {};

		post.listPosts(function(res) {
			vm.listpost = res;
			if(res) {
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
			}
		});

		collaborator.listCollaborators(function(res) {
			if(res) {
				vm.collaborators = res.Data;
			}		
		});

		customer.listCustomers(function(res) {
			if(res) {
				vm.customers = res.Data;
			}
		});

		user.loginInfo(token, function(res) {
			vm.loginInfo = res;
			console.log(res);
		});

		vm.post.CustomerId = "";
		vm.post.CustomerGender = "";

		vm.selectCustomer = function() {
			if(vm.customers) {
				vm.customers.forEach(function(value) {
					if(vm.post.CustomerNumPhone == value.NumPhone) {
						vm.post.CustomerName = value.FullName;
						vm.post.CustomerEmail = value.Email;
						vm.post.CustomerId = value.CustomerId;
						vm.post.CustomerGender = value.Gender;
					}
				});
			}
		}

		vm.createPost = function() {
			vm.post.CounselorId = vm.loginInfo.CounselorId;
			post.addPost(vm.post, function(res) {
				console.log(res);
			})
		}
	}
})();
