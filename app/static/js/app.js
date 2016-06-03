'use strict';

angular.module('leaguerankings', [
  'ngRoute',
  'leaguerankings.home',
  'leaguerankings.dashboards',
  'leaguerankings.profile',
  'leaguerankings.backendService',
  'auth0',
  'angular-storage',
  'angular-jwt'
])

.config(['$locationProvider', '$routeProvider', 'authProvider', '$httpProvider', 'jwtInterceptorProvider',
  function($locationProvider, $routeProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  })  
  .when('/dashboards', {
    templateUrl: 'views/dashboards/dashboards.html',
    controller: 'DashboardsCtrl'
  })
  .when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/profile', {
    templateUrl: 'views/profile/profile.html',
    controller: 'ProfileCtrl',
    requiresLogin: true
  });

  authProvider.init({
    domain: 'leaguerankings.auth0.com',
    clientID: 'JRpQvjFbT5GVDgbvEoc8NqloyYDKpUtQ',
    loginUrl: '/home',
    icon: 'https://cldup.com/bxABgDlMvt.png'
  });

  authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
    console.log('Login Success');
    profilePromise.then(function(profile) {
      store.set('profile', profile);
      store.set('token', idToken);
    });
    $location.url('/profile');
  });

  authProvider.on('loginFailure', function() {
    alert('Error');
  });

  authProvider.on('authenticated', function($location) {
    console.log('Authenticated');

  });

  authProvider.on('logout', function($location) {
    console.log('logged out')
  });

  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  };

  $httpProvider.interceptors.push('jwtInterceptor');
  $locationProvider.hashPrefix('!');

}])

.run(function($rootScope, auth, store, jwtHelper, $location) {
  
  auth.hookEvents();
  $rootScope.$on('$locationChangeStart', function() {

    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }

  });
});


