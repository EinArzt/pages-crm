/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects', [ 'projects.services' ])
  .controller('ProjectsCtrl', function (ProjectService) {



    var _this = this;

    this.projects = [ ];
    this.search = "";

    //this.clients = ClientService.get.all();

  });
