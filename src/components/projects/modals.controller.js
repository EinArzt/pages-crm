/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('projects.modals', [ ])
  .controller('ProjectModalCtrl', function ($scope, $modal, ClientService, EmployeeService, ConfigService) {

    var clients = ClientService.get.all();
    var employees = [ ];
    var config = { };
    EmployeeService.get.all().then(function(resp) {
      employees = resp;
    });

    ConfigService.get.all().then(function(resp) {
      config = resp;
    });

    this.edit = function (project) {

      $modal.open({
        templateUrl: 'components/projects/edit.modal.html',
        controller: 'ProjectEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          project: function () {
            return project;
          },
          clients: function() {
            return clients;
          },
          employees: function() {
            return employees;
          },
          config: function() {
            return config;
          }
        }
      });
    };

    this.new = function () {

      $modal.open({
        templateUrl: 'components/projects/new.modal.html',
        controller: 'ProjectNewModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          clients: function() {
            return clients;
          },
          employees: function() {
            return employees;
          },
          config: function() {
            return config;
          }
        }
      });
    };
  })
  .controller('ProjectEditModalCtrl', function ($scope, $modalInstance, ProjectService, project, clients, employees, config) {

    $scope.origProject = project;
    $scope.project = angular.copy(project);

    $scope.employees = employees;
    $scope.clients = clients;
    $scope.wages = config.wages;

    $scope.save = function () {
      ProjectService.edit($scope.project, $scope.origProject);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.delete = function() {
      ProjectService.delete(project);
      $modalInstance.dismiss('cancel');
    };

  })
  .controller('ProjectNewModalCtrl', function ($scope, $modalInstance, ProjectService, clients, employees, config) {

    $scope.project = { };
    $scope.clients = clients;
    $scope.employees = employees;
    $scope.project.wages = angular.copy(config.wages);
    $scope.wages = config.wages;

    angular.forEach($scope.project.wages, function(wage) {
      delete wage.name;
    });

    $scope.save = function () {
      ProjectService.new($scope.project);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
