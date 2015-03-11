/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects.services', [ ])
  .service('ProjectService', function(NotificationService, Restangular, ClientService, ModelService) {

    var projects = [ ];
    var API = Restangular.all('projects');

    var projectsReq = API.getList();
    projects = projectsReq.$object;

    var populateProjects = projectsReq.then(function() {
      for(var i = 0; i < projects.length; i++) {
        ModelService.import.toProject(projects[i]);
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

    this.edit = function(newProject, project) {
      Restangular.copy(newProject, project);

      project.put().then(function() {
        ModelService.import.toProject(project);

        NotificationService.Project.edit.success(project);
      })
        .catch(function() {
        NotificationService.Project.edit.error();
      });
    };

    this.new = function(project) {
      API.post(project).then(function(project) {
        ModelService.import.toProject(project);
        projects.push(project);

        NotificationService.Project.new.success(project);
      })
        .catch(function(e) {
        NotificationService.Project.new.error();
      });

      //$rootScope.$broadcast('CLIENTS_UPDATE');
    };

    this.delete = function(project) {
      project.remove().then(function() {
        var index = projects.indexOf(project);
        if (index > -1) projects.splice(index, 1);

        NotificationService.Project.delete.success(project);
      })
        .catch(function() {
        NotificationService.Project.delete.error();
      });

      //TODO Add Papierkorb so that projects dont get deleted immediately only after 30 days.
    };
  });
