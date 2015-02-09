/**
 * Created by Martin on 08.02.2015.
 */

'use strict';

angular.module('clientModals', [ ])
  .controller('ClientModalsCtrl', function ($scope, $modal) {

    $scope.edit = function (client) {

      $scope.client = client;

      $modal.open({
        templateUrl: 'components/clients/modals/edit.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          client: function () {
            return $scope.client;
          }
        }
      });
    }
  })
  .controller('ClientModalsEditCtrl', function ($scope, $modalInstance, client) {

    $scope.client = angular.copy(client);
    $scope.origClient = client;

    $scope.save = function() {
      $modalInstance.close();

      $scope.origClient = angular.copy($scope.client);
    };
  });
