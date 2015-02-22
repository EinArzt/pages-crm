/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('clients.modals', [ ])
  .controller('ClientModalCtrl', function ($scope, $modal) {

    this.edit = function (client) {

      $modal.open({
        templateUrl: 'components/clients/edit.modal.html',
        controller: 'ClientEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          client: function () {
            return client;
          }
        }
      });
    };

    this.new = function () {

      $modal.open({
        templateUrl: 'components/clients/new.modal.html',
        controller: 'ClientNewModalCtrl',
        windowClass: 'stick-up'
      });
    };
  })
  .controller('ClientEditModalCtrl', function ($scope, $modalInstance, ClientService, client) {

    $scope.origClient = client;
    $scope.client = angular.copy(client);

    $scope.save = function () {
      ClientService.edit($scope.client, $scope.origClient);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.delete = function() {
      ClientService.delete(client);
      $modalInstance.dismiss('cancel');
    }
  })
  .controller('ClientNewModalCtrl', function ($scope, $modalInstance, ClientService) {

    $scope.client = { };

    $scope.save = function () {
      ClientService.new($scope.client);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
