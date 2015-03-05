/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects', [ 'projects.services', 'projects.modals' ])
  .controller('ProjectsCtrl', function ($scope, ProjectService) {

    var _this = this;

    this.projects = [ ];
    this.search = "";

    ProjectService.get.all().then(function(projects) {
      _this.projects = projects;
    })
      .catch(function(e) {
        alert('error');
      });

  })
  .controller('ProjectCtrl', function($scope, ProjectService, $stateParams, $rootScope) {

    var _this = this;
    var stateParams = $stateParams.projectId;

    this.projects = [ ];

    ProjectService.get.byId(stateParams).then(function(project) {
      _this.project = project;
    })
      .catch(function(e) {
        alert('error');
      });
  });
