/**
 * Created by martinsuess on 09.03.15.
 */

'use strict';

angular.module('employees.modals', [ ])
  .controller('EmployeeModalCtrl', function ($scope, $modal, ConfigService) {

    var config = { };

    ConfigService.get.all().then(function(resp) {
      config = resp;
    });

    this.edit = function (employee) {

      $modal.open({
        templateUrl: 'components/employees/modals/edit.modal.html',
        controller: 'EmployeeEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          employee: function () {
            return employee;
          },
          config: function() {
            return config;
          }
        }
      });
    };

    this.new = function () {

      $modal.open({
        templateUrl: 'components/employees/modals/new.modal.html',
        controller: 'EmployeeNewModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          config: function() {
            return config;
          }
        }
      });
    };
  })
  .controller('EmployeeEditModalCtrl', function ($scope, $modalInstance, EmployeeService, employee, config) {

    $scope.origEmployee = employee;
    $scope.employee = angular.copy(employee);
    $scope.config = config;

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
  .controller('EmployeeNewModalCtrl', function ($scope, $modalInstance, EmployeeService, config) {

    $scope.employee = { };
    $scope.config = config;

    $scope.save = function () {
      EmployeeService.new($scope.employee);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
