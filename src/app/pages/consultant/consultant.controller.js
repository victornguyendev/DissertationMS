(function() {
    'use strict';
  
    angular
      .module('angular')
      .controller('ConsultantController', ConsultantController);
  
/** @ngInject */
function ConsultantController(consultant, moment) {
  var vm = this;

  vm.time = "";
  vm.is_open = false;

  vm.showDateTimePicker = function() {
    vm.is_open = true;
  }

  consultant.listConsultant(function(res) {
    vm.listConsultant = res;
    console.log(res);
    res.Data.forEach(function(value, key) {
      if(value.IsPotential == true) {
        vm.listConsultant.Data[key].IsPotential = 'Đã chốt';
      } else {
        vm.listConsultant.Data[key].IsPotential = 'Chưa chốt';
      }
    }) 
  })

  
}
})();
  