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
    var now = moment(new Date());
    vm.consultant.EndDateTime = new Date(now.add(1,'days').format("YYYY-MM-DDTHH:mm:ssZ"));
    vm.consultant.StartDateTime = new Date(now.add(-1,'months').format("YYYY-MM-DDTHH:mm:ssZ"));

    // define check item
    vm.isCheck = false;
    // define angular cookie 
    var CounselorId = $localStorage.user.UserId;
    var token = $localStorage.user.Token;
    
    vm.is_open = false;
    vm.is_openStart = false; 
    vm.is_openEnd = false;

    vm.showDateTimePicker2 = function () {
      vm.is_open = true;
    }

    vm.showDateTimePicker = function () {
      vm.is_openStart = true;
    }
    vm.showDateTimePicker1 = function () {
      vm.is_openEnd = true;
    }

    consultant.listConsultant(vm.consultant, function (res) {
      vm.list = res;
      if (res) {
        res.Data.forEach(function (value, key) {
          if (value.IsPotential == true) {
            vm.list.Data[key].IsPotential = 'Đã chốt';
          } else {
            vm.list.Data[key].IsPotential = 'Chưa chốt';
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
      consultant.createConsultant(vm.consultant, function (res) {
        // $window.location = "/consultant/" + ;
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