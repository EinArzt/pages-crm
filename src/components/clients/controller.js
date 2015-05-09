/**
 * Created by martinsuess on 01.02.15.
 */

'use strict';

angular.module('clients', [ 'clients.modals', 'clients.services' ])
  .controller('ClientsCtrl', function ($scope, ClientService, $timeout) {

    var _this = this;

    this.clients = [ ];
    this.search = "";
    this.limitTo = 20;
    this.isLoading = true;

    this.loadMore = function() {
      _this.limitTo += 20;
    };

    ClientService.getList().then(function(resp) {
      _this.clients = resp;
      _this.isLoading = false;
    });
  });
