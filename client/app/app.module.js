(function () {
  'use strict';

  /*
  Set up angular module, which is a container or 'package' of similar code under a similar name.
  ie: controllers, services, filters, directives

  Inject appropriate dependencies.
  Dependency Injection states that instead of creating an instance of a dependent service when we need it,
  the class or function should 'ask for it'

  In this case, our module for the application is 'app' and we are injecting ui.router and app.dashboard,
  which is another module.
   */
  angular
    .module('app', ['ui.router', 'app.dashboard']);

})();