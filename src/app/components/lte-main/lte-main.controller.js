(function() {
  'use strict';

  angular
  .module('angular')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, common) {
    var vm = this;

    $timeout(function(){
      var script = angular.element('<script src="assets/js/adminlte.js"></script>');
      angular.element('body').append(script);
    },0);

    common.listWebsites(function(res) {
      vm.websites = res;
    })
  }
})();
