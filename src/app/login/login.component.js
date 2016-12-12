(function () {
    'use strict';

    /** @ngInject */
    function LoginController($log, $state, loginService) {
        // INIT VARS
        var vm = this;

        // FUNCTIONS
        vm.doLogin = function () {
            loginService.login().then(function () {
                $state.go('home');
            }, function () {
            });
        }
    }


    angular.module('angular1js').component('login', {
        templateUrl: 'app/login/login.html',
        controller: LoginController,
        bindings: {

        }
    });

})();