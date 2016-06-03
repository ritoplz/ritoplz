'use strict';

angular.module('leaguerankings.home', ['ngRoute', 'auth0'])

// .config(['$routeProvider', function($routeProvider) {
// }])

.controller('HomeCtrl', [ '$scope', 'auth', 'Model', function($scope, auth, Model) {
  $scope.auth = auth;
}]);
