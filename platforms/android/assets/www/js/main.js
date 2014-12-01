var remittanceApp = angular.module('remittanceApp', ['ngRoute', 'appControllers']);

remittanceApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      }).when('/send', {
        templateUrl: 'partials/send.html',
        controller: 'inboxViewAllController'
      }).when('/viewAllApplications', {
        templateUrl: 'partials/viewAllApplications.html',
        controller: 'inboxViewAllController'
      });

  }]);
