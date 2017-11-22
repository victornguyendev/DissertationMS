(function () {
  'use strict';

  angular
    .module('angular')
    .controller('ConsultantController', ConsultantController);

  /** @ngInject */
  function ConsultantController( common, consultant, post, collaborator, customer, user, moment, $localStorage,$window,$stateParams) {
    var vm = this;
    var defautVa = 0;
    vm.time = new Date();
    var postMoney = 10000000;
    var id = $stateParams.id;
    vm.consultant = {};
    // define check item
    vm.isCheck = false;
    // define angular cookie 
    var CounselorId = $localStorage.user.UserId;
    var token = $localStorage.user.Token;

    vm.is_open = false;

    vm.showDateTimePicker = function () {
      vm.is_open = true;
    }

    consultant.listConsultant(function (res) {
      vm.listConsultant = res;
      console.log(res);
      if (res) {
        res.Data.forEach(function (value, key) {
          if (value.IsPotential == true) {
            vm.listConsultant.Data[key].IsPotential = 'Đã chốt';
          } else {
            vm.listConsultant.Data[key].IsPotential = 'Chưa chốt';
          }
        })
      }
    })
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

    common.listWebsites(function (res) {
      if (res) {
        vm.consultant.page = res;
      }
    });

    common.listSources(function (res) {
      console.log(res);
      if (res) {
        vm.consultant.source = res;
      }
    });

    user.loginInfo(token, function (res) {
      vm.loginInfo = res;
      console.log(res);
    });

    vm.addConsultant = function () {
      vm.consultant.id = vm.loginInfo.CounselorId;
      consultant.addConsultant(vm.consultant, function (res) {
        console.log(res);
        // if (vm.consultant.postContent && vm.consultant.postMoney) {
        //   post.addPost(, function (res) {
        //     console.log(res);
        //   })
        // }
      })
    };

    vm.viewDetail = function(id) {
      $window.location = "/consultant/" + id;
		}
   
    if(id) {
			consultant.consultantDetail(id, function(res) {
				vm.consultant = res;
				console.log(res);
			})
		}
  }
})();