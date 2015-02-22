'use strict';

angular.module('pages', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'restangular',
  'ui.router',
  'ui.bootstrap',
  'clients',
  'directives',
  'factories',
  'projects'
  ])
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
        controller: 'ClientsCtrl as ClientsCtrl'
      })
      .state('base.projects', {
        url: '/projects',
        templateUrl: 'components/projects/list.html',
        controller: 'ProjectsCtrl as ProjectsCtrl'
      });

    $urlRouterProvider.otherwise('/404');
  });
