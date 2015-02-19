'use strict';

angular.module('pages', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'clients', 'directives', 'factories', 'clientModals'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        template: 'Index Seite',
        controller: 'MainCtrl'
      })
      .state('base', {
        abstract: true,
        templateUrl: 'components/base/base.html',
      })
      .state('base.clients', {
        url: '/clients',
        templateUrl: 'components/clients/list.html',
        controller: 'ClientsCtrl'
      });

    $urlRouterProvider.otherwise('/404');
  });
