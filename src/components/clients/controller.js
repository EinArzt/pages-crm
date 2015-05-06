/**
 * Created by martinsuess on 01.02.15.
 */

'use strict';

angular.module('clients', [ 'clients.modals', 'clients.services' ])
  .controller('ClientsCtrl', function ($scope, ClientService) {

    var _this = this;

    this.clients = [ ];
    this.search = "";
    this.limitTo = 20;

    this.loadMore = function() {
      _this.limitTo += 20;
    };

    ClientService.getList().then(function(resp) {
      _this.clients = resp;
    });
  });
