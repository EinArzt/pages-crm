/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('clients.services', [ ])
  .service('ClientService', function(APIService, HelperService) {

    var name = 'clients';
    var models = [ ];

    var APIReq = APIService.getList(name).then(function(resp) {
      models = resp;
    });

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
      APIService.update(name, updatedModel, model).then(function(resp) {
        return resp;
      });
    };

    //TODO: SERVER SIDE fullName and address Generation // Currently in Deployd but in Laravel TODO too
    this.new = function(model) {
      APIService.create(name, model).then(function(resp) {
        models.push(resp);
      });
    };

    this.delete = function(model) {
      APIService.remove(name, model).then(function() {
        var index = models.indexOf(model);
        if (index > -1) models.splice(index, 1);
      });

      //TODO Add Papierkorb so that clients dont get deleted immediately only after 30 days.
    };
  });
