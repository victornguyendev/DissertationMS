(function () {
  'use strict';

  angular
    .module('angular')
    .controller('ConsultantController', ConsultantController);

  /** @ngInject */
  function ConsultantController(common, consultant, post, collaborator, customer, user, moment, $localStorage, $window, $stateParams) {
    var vm = this;

    var id = $stateParams.id;
    vm.consultant = {};
    vm.customer = {};
    vm.consultant.Datetime = new Date();
    vm.onlyNumbers = "/^\d+$/";
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

    vm.createConsultant = function () {
      vm.consultant.CounselorId = vm.loginInfo.CounselorId;
      consultant.createConsultant(vm.consultant, function (res) {
        console.log(res);
      })
    };

    vm.viewDetail = function (id) {
      $window.location = "/consultant/" + id;
    }


    if (id) {
      consultant.consultantDetail(id, function (res) {
        vm.consultantDetail = res;
      })
    }
  }
})();