/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('projects.modals', [ ])
  .controller('ProjectModalCtrl', function ($scope, $modal, ClientService) {

    var clients = ClientService.get.all();

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
          }
        }
      });
    };
  })
  .controller('ProjectEditModalCtrl', function ($scope, $modalInstance, ProjectService, project, clients) {

    $scope.origProject = project;
    $scope.project = angular.copy(project);

    $scope.clients = clients;

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
  .controller('ProjectNewModalCtrl', function ($scope, $modalInstance, ProjectService, clients) {

    $scope.project = { };
    $scope.clients = clients;

    $scope.save = function () {
      ProjectService.new($scope.project);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });