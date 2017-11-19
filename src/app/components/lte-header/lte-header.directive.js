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
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LTEHeaderController() {
      var vm = this;
    }
  }

})();
