(function () {
  'use strict';

  angular
    .module('angular')
    .controller('ConsultantController', ConsultantController);

  /** @ngInject */
  function ConsultantController(common, consultant, post, collaborator, customer, user, moment, $localStorage) {
    var vm = this;

    vm.time = "";
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
}
});