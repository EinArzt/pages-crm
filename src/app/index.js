'use strict';

// TODO: REMOVED ngAnimate;
angular.module('pages', [
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
  'notifications',
  'projects',
  'employees',
  'base.services',
  'config',
  'articles',
  'suppliers',
  'api',
  'helper',
  'infinite-scroll'
  ])
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:2403/');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('base', {
        abstract: true,
        templateUrl: 'app/main/main.html'
      })
      .state('base.overview', {
        url: '/',
        templateUrl: 'components/overview/overview.html',
        controller: 'MainCtrl'
      })
      .state('base.config', {
        url: '/config',
        templateUrl: 'components/configs/config.html',
        controller: 'ConfigCtrl as ConfigCtrl'
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
      })
      .state('base.articles', {
        url: '/articles',
        templateUrl: 'components/articles/list.html',
        controller: 'ArticleCtrl as ArticleCtrl'
      })
      .state('base.suppliers', {
        url: '/suppliers',
        templateUrl: 'components/suppliers/list.html',
        controller: 'SupplierCtrl as SupplierCtrl'
      });

    $urlRouterProvider.otherwise('/404');
  });
