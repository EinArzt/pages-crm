/**
 * Created by martinsuess on 08.03.15.
 */

'use strict';

angular.module('base.services', [ ])
  .service('ModelService', function(Restangular, ClientService, $q, EmployeeService) {

    this.import = {
      toProject: function(project) {
        var promises = [ ];

        promises[0] = ClientService.get.byId(project.clientId);
        for(var j = 0; j < project.employeesId.length; j++) {
          //TODO: CHANGE CLIENTS TO EMPLOYEES
          promises.push(EmployeeService.get.byId(project.employeesId[j]));
        }

        $q.all(promises).then(function(resp) {
          project.client = { };
          project.employees = [ ];

          project.client = resp[0];

          for(var k = 1; k < resp.length; k++) {
            project.employees.push(resp[k]);
          }

          return project;
        })
      }
    };
  });
