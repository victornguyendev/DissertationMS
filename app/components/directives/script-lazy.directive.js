(function() {
  'use strict';

  angular
    .module('angular')
    .directive('script', scriptLazyDirective);

  /** @ngInject */
  function scriptLazyDirective() {
    var directive = {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type=='text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };

    return directive;
  }

})();
