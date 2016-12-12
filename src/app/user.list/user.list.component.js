(function () {
    'use strict';

    /** @ngInject */
    function UserListController() {
        var vm = this;

        activate();

        function activate() {
            vm.rowCollection = [
                { firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com' },
                { firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com' },
                { firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com' }
            ];

            vm.getters = {
                firstName: function (value) {
                    //this will sort by the length of the first name string
                    return value.firstName.length;
                }
            }
        }

    }

    angular.module('angular1js').component('userListComponent', {
        templateUrl: 'app/user.list/user.list.html',
        controller: UserListController,
        bindings: {
            title: '<'
        }
    });

})();