/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('suppliers.modals', [ ])
  .controller('SupplierModalCtrl', function ($scope, $modal) {

    this.edit = function (supplier) {

      $modal.open({
        templateUrl: 'components/suppliers/edit.modal.html',
        controller: 'SupplierEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          supplier: function () {
            return supplier;
          }
        }
      });
    };

    this.new = function () {

      $modal.open({
        templateUrl: 'components/suppliers/new.modal.html',
        controller: 'SupplierNewModalCtrl',
        windowClass: 'stick-up'
      });
    };
  })
  .controller('SupplierEditModalCtrl', function ($scope, $modalInstance, SupplierService, supplier) {

    $scope.origSupplier = supplier;
    $scope.supplier = angular.copy(supplier);

    $scope.save = function () {
      SupplierService.edit($scope.supplier, $scope.origSupplier);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.delete = function() {
      SupplierService.delete(supplier);
      $modalInstance.dismiss('cancel');
    }
  })
  .controller('SupplierNewModalCtrl', function ($scope, $modalInstance, SupplierService) {

    $scope.supplier = { };

    $scope.save = function () {
      SupplierService.new($scope.supplier);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
