/**
 * Created by martinsuess on 09.03.15.
 */

'use strict';

angular.module('employees.modals', [ ])
  .controller('EmployeeModalCtrl', function ($scope, $modal) {

    this.edit = function (employee) {

      $modal.open({
        templateUrl: 'components/employees/edit.modal.html',
        controller: 'EmployeeEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          employee: function () {
            return employee;
          }
        }
      });
    };

    this.new = function () {

      $modal.open({
        templateUrl: 'components/employees/new.modal.html',
        controller: 'EmployeeNewModalCtrl',
        windowClass: 'stick-up'
      });
    };
  })
  .controller('EmployeeEditModalCtrl', function ($scope, $modalInstance, EmployeeService, employee) {

    $scope.origEmployee = employee;
    $scope.employee = angular.copy(employee);

    $scope.save = function () {
      EmployeeService.edit($scope.employee, $scope.origEmployee);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.delete = function() {
      EmployeeService.delete(employee);
      $modalInstance.dismiss('cancel');
    }
  })
  .controller('EmployeeNewModalCtrl', function ($scope, $modalInstance, EmployeeService) {

    $scope.employee = { };

    $scope.save = function () {
      EmployeeService.new($scope.employee);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
