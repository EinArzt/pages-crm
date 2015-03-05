/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('clients.services', [ ])
  .service('ClientService', function(NotificationService, Restangular) {

    var clients = [ ];
    var API = Restangular.all('clients');

    var clientsReq = API.getList();
    var clients = clientsReq.$object;

    this.get = {
      all: function() {
        return clients;
      },
      byId: function(id) {
        return clientsReq.then(function() {
          for(var i = 0; i < clients.length; i++) {
            if(clients[i].id === id) {
              return clients[i];
            }
          }
        });
      }
    };

    this.edit = function(client, origClient) {
      Restangular.copy(client, origClient);
      origClient.fullName = client.name + ' ' + client.lastName;
      origClient.address = client.street + ', ' + client.zipcode + ' ' + client.city;

      origClient.put().then(function() {
        NotificationService.Client.edit.success(origClient);
      }, function error() {
        NotificationService.Client.edit.error();
      });
    };

    this.new = function(client) {
      var temp = Restangular.copy(client);

      client.fullName = client.name + ' ' + client.lastName;
      client.address = client.street + ', ' + client.zipcode + ' ' + client.city;

      API.post(client).then(function(resp) {
        clients.push(resp);

        NotificationService.Client.new.success(client);
      }).catch(function(e) {
        client.fullName = temp.fullName;
        client.address = temp.address;

        NotificationService.Client.new.error();
      });

      //$rootScope.$broadcast('CLIENTS_UPDATE');
    };

    this.delete = function(client) {
      client.remove().then(function() {
        var index = clients.indexOf(client);
        if (index > -1) clients.splice(index, 1);

        NotificationService.Client.delete.success(client);
      }, function error() {
        NotificationService.Client.delete.error();
      });

      //TODO Add Papierkorb so that clients dont get deleted immediately only after 30 days.
    };
  });
