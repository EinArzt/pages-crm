/**
 * Created by Martin on 11.03.2015.
 */

'use strict';

angular.module('config.service', [ ])
  .service('ConfigService', function(Restangular, NotificationService) {

    var config = [ ];

    var API = Restangular.all('configs');

    var configReq = API.getList();
    config = configReq.$object;

    this.get = {
      all: function() {
        return configReq.then(function() {
          return config[0];
        });
      },
      wages: function() {
        return configReq.then(function() {
          return config.wages;
        });
      }
    };

    this.edit = {
      wages: function() {
        config[0].put().then(function() {
          NotificationService.Config.wages.edit.success();
        })
          .catch(function() {
            NotificationService.Config.wages.edit.error();
          });
      }
    };

    this.wages = {
      save: function() {
        config[0].put().then(function() {
          NotificationService.Config.wages.edit.success();
        })
          .catch(function() {
            NotificationService.Config.wages.edit.error();
          });
      },
      add: function() {
        var defaultWage = {
          name: 'Lohngruppe ohne Namen',
          wage: '50'
        };

        config[0].wages.push(defaultWage);
        NotificationService.Config.wages.add.success();
      },
      delete: function(wage) {
        var index = config[0].wages.indexOf(wage);
        if (index > -1) config[0].wages.splice(index, 1);

        config[0].put().then(function() {
          NotificationService.Config.wages.delete.success();
        })
          .catch(function() {
            NotificationService.Config.wages.edit.error();
          });
      }
    }


  });
