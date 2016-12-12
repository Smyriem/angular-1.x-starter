(function () {
  'use strict';

  /** @ngInject */
  function ContactController() {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({ $value: $ctrl.selected.item });
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({ $value: 'cancel' });
    };

  }

  angular.module('angular1js').component('contactModal', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactController,
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  });

})();