(function () {
    'use strict';
    angular
        .module('angular1js')
        .directive('multiSelectRequired', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, mCtrl) {
                    scope.$watch(attr.ngModel, function (value) {
                        if (attr.multiSelectRequired === "true") {
                            validate(value);
                        }
                    });
                    function validate(value) {
                        if (value && value.length > 0) {
                            mCtrl.$setValidity('multiSelectRequired', true);
                        } else {
                            mCtrl.$setValidity('multiSelectRequired', false);
                        }
                        return value;
                    }
                }
            };
        });
})();