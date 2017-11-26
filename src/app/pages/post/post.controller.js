(function () {
	'use strict';

	angular
		.module('angular')
		.controller('PostController', PostController);

	/** @ngInject */
	function PostController(post, interactive, collaborator, customer, user, moment, $localStorage, $stateParams, $window) {
		var vm = this;
		var CounselorId = $localStorage.user.UserId;
		var token = $localStorage.user.Token;
		var id = $stateParams.id;
		console.log($localStorage.user);

		vm.post = {};
		vm.his = {};

		vm.post.Deadline = new Date();
		vm.post.DateTimeNow = new Date();
		var now = moment(new Date());
		vm.post.EndDateTime = new Date(now.add(1, 'days').format("YYYY-MM-DDTHH:mm:ssZ"));
		vm.post.StartDateTime = new Date(now.add(-1, 'months').format("YYYY-MM-DDTHH:mm:ssZ"));
		vm.is_openStart = false;
		vm.is_openEnd = false;
		vm.is_open = false;

		
		/* start-end date filter of InteractiveLog */
		var now = moment(new Date());
		vm.his.is_openInteractiveStart = false;
		vm.his.is_openInteractiveEnd = false;
		vm.his.InteractiveStart = new Date(now.add(1, 'days').format("YYYY-MM-DDTHH:mm:ssZ"));
		vm.his.InteractiveEnd = new Date(now.add(-1, 'months').format("YYYY-MM-DDTHH:mm:ssZ"));

		vm.his.showDateTimePickerInteractiveStart = function () {
			vm.his.is_openInteractiveStart = true;
		}
		vm.his.showDateTimePickerInteractiveEnd = function () {
			vm.his.is_openInteractiveEnd = true;
		}
		/* start-end date filter of InteractiveLog */

		/* start-end date filter of PaymentLog */
		var now = moment(new Date());
		vm.his.is_openPaymentStart = false;
		vm.his.is_openPaymentEnd = false;
		vm.his.PaymentStart = new Date(now.add(1, 'days').format("YYYY-MM-DDTHH:mm:ssZ"));
		vm.his.PaymentEnd = new Date(now.add(-1, 'months').format("YYYY-MM-DDTHH:mm:ssZ"));

		vm.his.showDateTimePickerPaymentStart = function () {
			vm.his.is_openPaymentStart = true;
		}
		vm.his.showDateTimePickerPaymentEnd = function () {
			vm.his.is_openPaymentEnd = true;
		}
		/* start-end date filter of PaymentLog */

		vm.showDateTimePicker = function () {
			vm.is_openStart = true;
		}

		vm.showDateTimePicker1 = function () {
			vm.is_openEnd = true;
		}

		vm.showDateTimePicker2 = function () {
			vm.is_open = true;
		}

		vm.his.DateTime = new Date();
		vm.his.is_open = false;
		vm.his.showDateTimePickerHis = function () {
			vm.his.is_open = true;
		}

		vm.his.ExpectedActionDateTime = new Date();
		vm.his.is_openDateFuture = false;
		vm.his.showDateTimePickerDateFuture = function () {
			vm.his.is_openDateFuture = true;
		}


		post.listPosts(vm.post, function (res) {
			vm.listpost = res;
			if (res) {
				res.Data.forEach(function (value, key) {
					if (value.StatusPaymentCustomer == 1) {
						vm.listpost.Data[key].StatusPaymentCustomer = 'Một phần';
					} else {
						vm.listpost.Data[key].StatusPaymentCustomer = 'Thanh toán đủ';
					}

					if (value.StatusPost == 0) {
						vm.listpost.Data[key].StatusPost = 'Chưa bắt đầu';
					} else if (value.StatusPost == 1) {
						vm.listpost.Data[key].StatusPost = 'Đang làm';
					} else if (value.StatusPost == 2) {
						vm.listpost.Data[key].StatusPost = 'Đã xong';
					} else {
						vm.listpost.Data[key].StatusPost = 'Hủy';
					}

					if (value.Description.length > 15) {
						vm.listpost.Data[key].Description = value.Description.slice(0, 15) + '...';
					}
				})
			}
		});

		collaborator.listCollaborators(function (res) {
			if (res) {
				vm.collaborators = res.Data;
			}
		});

		customer.listCustomers(function (res) {
			if (res) {
				vm.customers = res.Data;
			}
		});

		user.loginInfo(token, function (res) {
			vm.loginInfo = res;
		});

		vm.post.CustomerId = "";
		vm.post.CustomerGender = "";

		vm.selectCustomer = function () {
			if (vm.customers) {
				vm.customers.forEach(function (value) {
					if (vm.post.CustomerNumPhone == value.NumPhone) {
						vm.post.CustomerName = value.FullName;
						vm.post.CustomerEmail = value.Email;
						vm.post.CustomerId = value.CustomerId;
						vm.post.CustomerGender = value.Gender;
					}
				});
			}
		};
		/*Interactive*/
		vm.createInteractive = function () {
			vm.his.PostId = id
			interactive.addInteractive(vm.his, function (res) {
				console.log(res);
			})
		};
		interactive.listInteractives(vm.his, function (res) {
			if (res) {
				vm.his.Data = res.Data;
				console.log(res.Data)
			}
		});
		/*Interactive*/

		vm.viewDetail = function (id) {
			$window.location = "/post/" + id;
		};

		/* Create post */
		vm.createPost = function () {
			vm.post.CounselorId = vm.loginInfo.CounselorId;
			post.addPost(vm.post, function (res) {
				console.log(res);
			})
		};
		/* End create post */

		/* Post detail */
		if (id) {
			post.postDetail(id, function (res) {
				vm.post = res;
				console.log(res);
			})
		};
		/* End post detail */


	}
})();
