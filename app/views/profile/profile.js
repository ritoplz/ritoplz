'use strict';

angular.module('leaguerankings.profile', ['ngRoute', 'auth0'])

// .config(['$routeProvider', function($routeProvider) {

// }])

.controller('ProfileCtrl', [ '$scope', 'auth', '$http','$location', 'store', '$rootScope', 
  function($scope, auth, $http, $location, store, $rootScope) {
  
  $scope.auth = auth;

  auth.profilePromise.then(function(profile) {
    console.log(profile)
  });

  var regions = [
    {name: 'Brazil'},
    {name: 'North America'},
    {name: 'Europe', code: 'EUW'}
  ];
  $scope.regions = regions;

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/home');
  }

}]);


 // $scope.names = [ 
  //   {
  //     'name': 'Niak'
  //   },
  //   {
  //     'name': 'Woz'
  //   }
  // ];

  // var a = '';
  // Model.fetch()
  // .then(function(data) {
  //   console.log(data)
  // }, function(err) {
  //   console.log(err)
  // });

  // $scope.addName = function() {
  //   $scope.names.push({'name': $scope.name});
  // }
