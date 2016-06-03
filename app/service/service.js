'use strict';

angular.module('leaguerankings.backendService', [])

.constant('URI', 'http://localhost:3009/')

.service('Model', function($http, URI) {


  this.fetch = function() {
    return $http.get(URI);
  }

})
