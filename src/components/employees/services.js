/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('employees.services', [ ])
  .service('EmployeeService', function(NotificationService, Restangular) {

    var employees = [ ];
    var API = Restangular.all('employees');

    var employeesReq = API.getList();
    employees = employeesReq.$object;

    this.get = {
      all: function() {
        return employeesReq.then(function() {
          return employees;
        });
      },
      byId: function(id) {
        return employeesReq.then(function() {
          for(var i = 0; i < employees.length; i++) {
            if(employees[i].id === id) {
              return employees[i];
            }
          }
        });
      }
    };

    this.edit = function(newEmployee, employee) {
      var temp = { };

      Restangular.copy(employee, temp);
      Restangular.copy(newEmployee, employee);
      employee.fullName = employee.name + ' ' + employee.lastName;
      employee.address = employee.street + ', ' + employee.zipcode + ' ' + employee.city;

      employee.put().then(function() {
        NotificationService.Employee.edit.success(employee);
      })
        .catch(function() {
          Restangular.copy(temp, employee);
          NotificationService.Employee.edit.error();
        });
    };

    this.new = function(employee) {
      employee.fullName = employee.name + ' ' + employee.lastName;
      employee.address = employee.street + ', ' + employee.zipcode + ' ' + employee.city;

      API.post(employee).then(function(employee) {
        employees.push(employee);

        NotificationService.Employee.new.success(employee);
      })
        .catch(function(e) {
          NotificationService.Employee.new.error();
        });

      //$rootScope.$broadcast('CLIENTS_UPDATE');
    };

    this.delete = function(employee) {
      employee.remove().then(function() {
        var index = employees.indexOf(employee);
        if (index > -1) employees.splice(index, 1);

        NotificationService.Employee.delete.success(employee);
      })
        .catch(function() {
          NotificationService.Employee.delete.error();
        });

      //TODO Add Papierkorb so that projects dont get deleted immediately only after 30 days.
    };
  });
