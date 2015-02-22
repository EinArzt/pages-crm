/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects.services', [ ])
  .service('ProjectService', function() {
    var projects = [
      {
        "id": 0,
        "clientId": 1,
        "name": "Küche reparieren"
      },
      {
        "id": 1,
        "clientId": 4,
        "name": "Küche reparieren"
      },
      {
        "id": 2,
        "clientId": 3,
        "name": "Küche reparieren"
      },
      {
        "id": 3,
        "clientId": 1,
        "name": "Küche reparieren"
      },
      {
        "id": 4,
        "clientId": 4,
        "name": "Küche reparieren"
      }
    ];

    this.get = {
      all: function() {
        return projects;
      },
      byId: function() {

      }
    };

    this.edit = function(project, origProject) {
      angular.copy(projects, origProject);

      NotificationService.Project.edit.success(origProject);
    };

    this.new = function(project) {
      projects.push(project);

      //$rootScope.$broadcast('CLIENTS_UPDATE');

      NotificationService.Project.new.success(project);
    };

    this.delete = function(project) {
      for (var i in projects) {
        if (projects[i].id == project.id) {
          projects.splice(i, 1);
        }
      }
    };

    NotificationService.Project.delete.success(project);

    //TODO Add Papierkorb so that clients dont get deleted immediately only after 30 days.
  });
