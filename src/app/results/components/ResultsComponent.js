(function () {
  'use strict';

  app.component('searchResults', {
    scope: true,
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: {
      results: '<',
      totalItems: '<'
    },
    templateUrl: 'results/components/ResultsComponent.html'
  });

}());