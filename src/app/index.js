'use strict';

angular.module('pages', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'clients' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('base', {
        url: '/',
        templateUrl: 'components/base/base.html',
        controller: 'MainCtrl'
      })
      .state('base.clients', {
        url: '/clients',
        templateUrl: 'components/clients/list.html',
        controller: 'ClientsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
