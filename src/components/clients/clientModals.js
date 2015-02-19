/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('clientModals', [ ])
  .controller('ClientModalCtrl', function ($scope, $modal) {

    var _this = this;

    this.edit = function (client) {
      $scope.client = client;

      $modal.open({
        templateUrl: 'components/clients/client.edit.modal.html',
        controller: 'ClientEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          client: function () {
            return $scope.client;
          }
        }
      });
    };
  })
  .controller('ClientEditModalCtrl', function ($scope, $modalInstance, client) {

    $scope.origClient = client;
    $scope.client = angular.copy(client);

    $scope.save = function () {
      angular.copy($scope.client, $scope.origClient);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
