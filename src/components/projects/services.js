/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects.services', [ ])
  .service('ProjectService', function(NotificationService, Restangular, ClientService, $q) {

    var projects = [ ];
    var API = Restangular.all('projects');

    var projectsReq = API.getList();
    projects = projectsReq.$object;

    var populateProjects = projectsReq.then(function() {
      for(var i = 0; i < projects.length; i++) {
        (function() {
          var promises = [ ];
          var singleProject = projects[i];
          promises[0] = ClientService.get.byId(singleProject.clientId);
          for(var j = 0; j < singleProject.employeesId.length; j++) {
            //TODO: CHANGE CLIENTS TO EMPLOYEES
            promises.push(ClientService.get.byId(singleProject.employeesId[j]));
          }

          $q.all(promises).then(function(resp) {
            singleProject.client = { };
            singleProject.employees = [ ];

            singleProject.client = resp[0];

            for(var k = 1; k < resp.length; k++) {
              singleProject.employees.push(resp[k]);
            }
          })

        })();
      }
    });

    this.get = {
      all: function() {
        return populateProjects.then(function() {
          return projects;
        });
      },
      byId: function(id) {
        return populateProjects.then(function() {
          for(var i = 0; i < projects.length; i++) {
            if(projects[i].id === id) {
              return projects[i];
            }
          }
        });
      }
    };

    this.edit = function(project, origProject) {
      Restangular.copy(project, origProject);
//TODO ON EDIT UPDATE EMPLOYEE
      origProject.put().then(function() {
        ClientService.get.byId(origProject.clientId).then(function(client) {
          origProject.client = client;
        });

        NotificationService.Project.edit.success(origProject);
      }, function error() {
        NotificationService.Project.edit.error();
      });
    };

    this.new = function(project) {
      console.log(project);
      console.log(project.employees);
      console.log(project.client);
      API.post(project).then(function(project) {
        ClientService.get.byId(project.clientId).then(function(client) {
          project.client = client;
          projects.push(project);
        });

        NotificationService.Project.new.success(project);
      }).catch(function(e) {
        NotificationService.Project.new.error();
      });

      //$rootScope.$broadcast('CLIENTS_UPDATE');
    };

    this.delete = function(project) {
      project.remove().then(function() {
        var index = projects.indexOf(project);
        if (index > -1) projects.splice(index, 1);

        NotificationService.Project.delete.success(project);
      }, function error() {
        NotificationService.Project.delete.error();
      });

      //TODO Add Papierkorb so that projects dont get deleted immediately only after 30 days.
    };
  });
