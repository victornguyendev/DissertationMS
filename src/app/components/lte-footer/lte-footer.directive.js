(function() {
  'use strict';

  angular
    .module('angular')
    .directive('lteFooter', lteFooter);

  /** @ngInject */
  function lteFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/lte-footer/lte-footer.html',
      controller: LTEFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LTEFooterController() {
      var vm = this;
    }
  }

})();
