(function () {
    'use strict';

    angular.module('angular1js').factory('loginService', loginService);

    /** @ngInject */
    function loginService($http,$q,$timeout/*, config*/) {

        var service = {
            login: login
        };
        return service;

        function login() {
            return $q(function (resolve) {
                $timeout(function () {
                    resolve('OK');
                }, 200);
            });
        }

    }

})();