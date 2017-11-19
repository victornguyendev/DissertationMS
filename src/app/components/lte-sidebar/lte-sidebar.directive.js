(function() {
  'use strict';

  angular
    .module('angular')
    .directive('lteSidebar', lteSidebar);

  /** @ngInject */
  function lteSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/lte-sidebar/lte-sidebar.html',
      controller: LTESidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LTESidebarController() {
      var vm = this;
    }
  }

})();
