'use strict';

angular.module('pages', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'restangular',
  'ui.router',
  'ui.bootstrap',
  'ui.select',
  'LocalStorageModule',
  'clients',
  'directives',
  'factories',
  'projects',
  'employees',
  'base.services'
  ])
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:2403/');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('base', {
        abstract: true,
        templateUrl: 'components/base/base.html',
      })
      .state('base.overview', {
        url: '/',
        templateUrl: 'components/overview/overview.html',
        controller: 'MainCtrl'
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
      })
      .state('base.project', {
        url: '/projects/:projectId',
        templateUrl: 'components/projects/single.html',
        controller: 'ProjectCtrl as ProjectCtrl'
      })
      .state('base.project.activity', {
        url: '/activity',
        templateUrl: 'components/projects/single.activity.html'
      })
      .state('base.employees', {
        url: '/employees',
        templateUrl: 'components/employees/list.html',
        controller: 'EmployeesCtrl as EmployeesCtrl'
      });

    $urlRouterProvider.otherwise('/404');
  });
