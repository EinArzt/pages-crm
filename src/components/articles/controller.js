/**
 * Created by martinsuess on 24.03.15.
 */

'use strict';

angular.module('articles', [ 'article.modals', 'article.services' ])
  .controller('ArticleCtrl', function ($scope, ClientService) {

    var _this = this;

    this.clients = [ ];
    this.search = "";

    this.clients = ClientService.get.all();
    /*ClientService.get.byId().then(function(client) {
     $scope.client = client;
     })
     .catch(function(e) {
     alert('error');
     });*/

    /*$scope.$on('CLIENTS_UPDATE', function() {
     console.log($scope.clients);
     $scope.clients = RESTService.Clients.get.all();
     console.log('clients update triggered');
     console.log($scope.clients);
     });*/

  });
