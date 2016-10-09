(function () {
  'use strict';

  /*
  ui-router vs ngRoute

  ngRoute: built-in routing tool from Angular (limited capabilities - only one view allowed per page)
  ui-router: a library built to improve on the default ngRoute capabilities - allows for nested views with different names
   */
  angular
    .module('app') //the config is under the 'app' module
    .config(config)
    
    function config ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('dashboard');
      
      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as vm'
        })
    }

})();