(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'app/components/lte-main/lte-main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/pages/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout',
        controller: 'LogoutController',
        controllerAs: 'vm'
      })
      .state('main.post', {
        url: '/post',
        templateUrl: 'app/pages/post/post.html',
        controller: 'PostController',
        controllerAs: 'vm'
      })
      .state('main.post-add', {
        url: '/post/add',
        templateUrl: 'app/pages/post/post-add.html',
        controller: 'PostController',
        controllerAs: 'vm'
      })
      .state('main.post-detail', {
        url: '/post/:id',
        templateUrl: 'app/pages/post/post-detail.html',
        controller: 'PostController',
        controllerAs: 'vm'
      })
      
      .state('main.consultant', {
        url: '/consultant',
        templateUrl: 'app/pages/consultant/consultant.html',
        controller: 'ConsultantController',
        controllerAs: 'vm'
      })

      .state('main.consultant-add', {
        url: '/consultant/add',
        templateUrl: 'app/pages/consultant/consultant-add.html',
        controller: 'ConsultantController',
        controllerAs: 'vm'
      })

      .state('main.consultant-detail', {
        url: '/consultant/:id',
        templateUrl: 'app/pages/consultant/consultant-detail.html',
        controller: 'ConsultantController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
