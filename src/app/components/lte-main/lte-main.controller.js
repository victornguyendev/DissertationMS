(function() {
  'use strict';

  angular
  .module('angular')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController(collaborator, $timeout, common, $localStorage, $window) {
    var vm = this;
    var numberPhone = "";
    $timeout(function(){
      var script = angular.element('<script src="assets/js/adminlte.js"></script>');
      angular.element('body').append(script);
    },0);

    if(!$localStorage.user) {
      $window.location = "/login";
    }

    common.listWebsites(function(res) {
      vm.websites = res;
    });

    common.listSources(function(res) {
      vm.sources = res;
    });


    collaborator.listCollaborators(function(res){
      vm.collaborators = res.Data;
    });

    
    vm.validatePhone = function(value) {
      
    }
  }
})();
