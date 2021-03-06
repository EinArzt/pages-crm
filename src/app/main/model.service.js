/**
 * Created by martinsuess on 08.03.15.
 */

'use strict';

angular.module('base.services', [ ])
  .service('ModelService', function(ClientService, EmployeeService) {

    this.importClient = function(model) {
      ClientService.find(model.clientId).then(function(resp) {
        model.client = resp;
      });
    };

    //TODO CHECK IF EMPLOYEESID EXISTS / EMPLOYEE IS ASSIGNED TO PROJECT, because there could be a project without Employees
    this.importEmployees = function(model) {
      for(var i = 0; i < model.employeesId.length; i++) {
        EmployeeService.find(model.employeesId[i]).then(function(resp) {
          model.employees.push(resp);
        });
      }
    };

  })
  .service('CSVService', function() {

    var _this = this;

    this.CSVToJSON = function(file) {
      Papa.parse(file, {
        worker: true,
        step: function(row) {
          console.log("Row:", row.data);
        },
        complete: function() {
          console.log("All done!");
        }
      });
    }
  });
