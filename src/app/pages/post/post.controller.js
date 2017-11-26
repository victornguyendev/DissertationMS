(function() {
	'use strict';

	angular
	.module('angular')
	.controller('PostController', PostController);

	/** @ngInject */
	function PostController(post, collaborator, customer, user, moment, $localStorage, $stateParams, $window) {
		var vm = this;

		var CounselorId = $localStorage.user.UserId;
		var token = $localStorage.user.Token;
		var id = $stateParams.id;
		console.log($localStorage.user);
		vm.post = {};

		vm.post.Deadline = new Date();
		vm.post.DateTimeNow = new Date();
		var now = moment(new Date());
		vm.post.EndDateTime = new Date(now.add(1,'days').format("YYYY-MM-DDTHH:mm:ssZ"));
		vm.post.StartDateTime = new Date(now.add(-1,'months').format("YYYY-MM-DDTHH:mm:ssZ"));	
		vm.is_openStart = false; 
		vm.is_openEnd = false;
		vm.is_open = false;

		vm.showDateTimePicker = function () {
		  vm.is_openStart = true;
		}

		vm.showDateTimePicker1 = function () {
		  vm.is_openEnd = true;
		}

		vm.showDateTimePicker2 = function () {
			vm.is_open = true;
		}

		vm.paymentlogs = {
			"Data": [
			{
				"BackUserName": "Nguyễn Văn Khôi",
				"BankNumber": "1234 2323 4343 2352",
				"BankName": "TP Bank",
				"Content": "sample string 2",
				"Amount": 3.1,
				"DayTrading": "22-11-2017 02:33 PM",
			},
			{
				"BackUserName": "Phan Minh Tú",
				"BankNumber": "1234 2323 4343 2352",
				"BankName": "ACB Bank",
				"Content": "sample string 2",
				"Amount": 3.1,
				"DayTrading": "22-11-2017 02:33 PM",
			}
			],
			"Index": 1,
			"Size": 2,
			"Total": 3
		};

		vm.consultationLogs = {
			"Data": [
			{
				"ConsultationLogId": 1,
				"CounselorId": 1,
				"CounselorName": "sample string 2",
				"CustomerId": 1,
				"CustomerName": "sample string 3",
				"CustomerNumPhone": "sample string 4",
				"Content": "sample string 1",
				"NumChar": 6,
				"DateTime": "22-11-2017 02:30 AM",
				"SourceId": 1,
				"SourceName": "sample string 8",
				"WebsiteId": 1,
				"WebsiteName": "sample string 9",
				"IsPotential": true
			},
			{
				"ConsultationLogId": 1,
				"CounselorId": 1,
				"CounselorName": "sample string 2",
				"CustomerId": 1,
				"CustomerName": "sample string 3",
				"CustomerNumPhone": "sample string 4",
				"Content": "sample string 2",
				"NumChar": 6,
				"DateTime": "22-11-2017 02:30 AM",
				"SourceId": 1,
				"SourceName": "sample string 8",
				"WebsiteId": 1,
				"WebsiteName": "sample string 9",
				"IsPotential": true
			}
			],
			"Index": 1,
			"Size": 2,
			"Total": 3
		}

		post.listPosts(vm.post, function(res) {
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

					if(value.Description.length > 15) {
						vm.listpost.Data[key].Description = value.Description.slice(0, 15) + '...';
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

		vm.viewDetail = function(id) {
			$window.location = "/post/" + id;
		}

		/* Create post */
		vm.createPost = function() {
			vm.post.CounselorId = vm.loginInfo.CounselorId;
			post.addPost(vm.post, function(res) {
				console.log(res);
			})
		}
		/* End create post */

		/* Post detail */
		if(id) {
			post.postDetail(id, function(res) {
				vm.post = res;
				console.log(res);
			})
		}
		/* End post detail */
	}
})();
