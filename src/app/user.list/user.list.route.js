(function () {
  'use strict';

  angular
    .module('angular1js')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    var userList = {
      parent: 'main',
      name: 'userList',
      url: '/userList',
      component: 'userListComponent',
      resolve: {
        title: function () {
          return "List of User:"
        }
      }
    };
    $stateProvider.state(userList);
  }

})();
