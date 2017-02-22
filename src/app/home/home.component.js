(function () {
    'use strict';

    /** @ngInject */
    function HomeController() {
        var $ctrl = this;

        $ctrl.modernBrowsers = [
            { name: "Opera", maker: "(Opera Software)", ticked: false },
            { name: "Internet Explorer", maker: "(Microsoft)", ticked: false },
            { name: "Firefox", maker: "(Mozilla Foundation)", ticked: false },
            { name: "Safari", maker: "(Apple)", ticked: false },
            { name: "Chrome", maker: "(Google)", ticked: false }
        ];

        $ctrl.outputs = [];
        $ctrl.submit = function () {
            $ctrl.outputs = [];
            $ctrl.outputs.push($ctrl.email);
            $ctrl.outputs.push($ctrl.password);
            $ctrl.outputs.push($ctrl.select2);
        }

    }

    angular.module('angular1js').component('home', {
        templateUrl: 'app/home/home.html',
        controller: HomeController,
        bindings: {

        }
    });

})();