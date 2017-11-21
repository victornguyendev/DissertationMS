(function() {
  'use strict';

  angular
  .module('angular')
  .directive('lteHeader', lteHeader);

  /** @ngInject */
  function lteHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/lte-header/lte-header.html',
      controller: LTEHeaderController,
      controllerAs: 'header',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LTEHeaderController($localStorage, $scope) {
      var vm = this;
      if($localStorage.user) {
        vm.userInfo = $localStorage.user;
      }
    }
  }

})();
