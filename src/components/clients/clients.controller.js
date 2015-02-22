/**
 * Created by martinsuess on 01.02.15.
 */
'use strict';

angular.module('clients', [ 'clients.modals', 'clients.services' ])
  .controller('ClientsCtrl', function ($scope, ClientService) {

    var _this = this;

    this.clients = [ ];
    this.search = "";

    this.clients = ClientService.get.all();

    /*$scope.$on('CLIENTS_UPDATE', function() {
      console.log($scope.clients);
      $scope.clients = RESTService.Clients.get.all();
      console.log('clients update triggered');
      console.log($scope.clients);
    });*/

  });
