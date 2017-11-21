/* global moment:false */
(function() {
  'use strict';

  angular
    .module('angular')
    .constant('moment', moment)
    .constant('_', window._)
    .constant('api', 'http://103.68.82.97:9092/api/');

})();
