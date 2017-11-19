(function() {
  'use strict';

  angular
    .module('angular')
    .directive('loadScript', loadScriptDirective);

  /** @ngInject */
  function loadScriptDirective() {
    var directive = {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if(attr.src != undefined) {
          var script = document.createElement('script');
          script.src = attr.src;
          elem.append(script);
        }
      }
    };

    return directive;
  }

})();
