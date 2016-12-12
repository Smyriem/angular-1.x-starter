(function () {
  'use strict';

  angular
    .module('angular1js')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $uiRouter) {
    //window['ui-router-visualizer'].visualizer($uiRouter);
    $log.debug('runBlock end');
  }

})();
