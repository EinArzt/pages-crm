/**
 * Created by martinsuess on 22.04.15.
 */

'use strict';

angular.module('api', [ ])
  .service('APIService', function(Restangular, NotificationService) {

    this.getList = function(name) {
      var API = Restangular.all(name);

      return API.getList().then(function(resp) {
        return resp;
      });
    };

    this.create = function(name, object) {
      var API = Restangular.all(name);

      return API.post(object).then(function(resp) {
        NotificationService[name].new.success(resp);

        return resp;
      }).catch(function(e) {
        NotificationService[name].new.error();
      });
    };

    this.update = function(name, modifiedObject, object) {
      Restangular.copy(modifiedObject, object);

      return object.put().then(function(resp) {
        Restangular.copy(resp, object);
        NotificationService[name].edit.success(resp);

        return object;
      }).catch(function(e) {
        NotificationService[name].edit.error();
      });
    };

    this.remove = function(name, object) {
      return object.remove().then(function() {
        NotificationService[name].delete.success(object);
      }).catch(function(e) {
        NotificationService[name].delete.error();
      });
    };
  });
