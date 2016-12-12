(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var home = {
      parent: 'main',
      name: 'home',
      url: '/home',
      component: 'home'
    };
    $stateProvider.state(home);
  }

})();
