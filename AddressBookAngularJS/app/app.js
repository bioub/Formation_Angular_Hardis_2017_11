'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.contacts-list',
  'myApp.contacts-add',
  'myApp.version'
]).
config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
