/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects.services', [ ])
  .service('ProjectService', function(NotificationService, Restangular, ClientService, ModelService, $state, APIService, HelperService) {

    var name = 'projects';
    var models = [ ];

    var APIReq = APIService.getList(name).then(function(resp) {
      models = resp;
    }).then(function() {
      for(var i = 0; i < models.length; i++) {
        populate(models[i]);
      }
    });

    var populate = function(model) {
      model.client = { };
      model.employees = [ ];

      ModelService.importClient(model);
      ModelService.importEmployees(model);
    };

    this.getList = function() {
      return APIReq.then(function() {
        return models;
      });
    };

    this.find = function(id) {
      return APIReq.then(function() {
        return HelperService.find(id, models);
      });
    };

    this.edit = function(updatedModel, model) {
      APIService.update(name, updatedModel, model).then(function() {
        populate(model);
      });
    };

    //TODO: SERVER SIDE fullName and address Generation // Currently in Deployd but in Laravel TODO too
    this.new = function(model) {
      APIService.create(name, model).then(function(resp) {
        populate(resp);
        models.push(resp);
      });
    };

    this.delete = function(model) {
      APIService.remove(name, model).then(function() {
        var index = models.indexOf(model);
        if (index > -1) models.splice(index, 1);

        $state.go('base.projects');
      });

      //TODO Add Papierkorb so that clients dont get deleted immediately only after 30 days.
    };
  });
