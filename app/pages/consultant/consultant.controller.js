(function () {
  'use strict';

  angular
    .module('angular')
    .controller('ConsultantController', ConsultantController);

  /** @ngInject */
  function ConsultantController(post, collaborator, customer, user, moment, $localStorage) {
    var vm = this;

    vm.time = "";

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
      res.Data.forEach(function (value, key) {
        if (value.IsPotential == true) {
          vm.listConsultant.Data[key].IsPotential = 'Đã chốt';
        } else {
        vm.listConsultant.Data[key].IsPotential = 'Chưa chốt';
        }
      })
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

    user.loginInfo(token, function (res) {
      vm.loginInfo = res;
      console.log(res);
    });

    vm.addConsultant = function () {
      vm.consultant.CounselorId = vm.loginInfo.CounselorId;
      post.addConsultant(vm.consultant, function (res) {
        console.log(res);
      })
    }
  }
})();
