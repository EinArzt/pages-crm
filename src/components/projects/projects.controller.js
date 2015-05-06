/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects', [ 'projects.services', 'projects.modals' ])
  .controller('ProjectsCtrl', function ($scope, ProjectService) {

    var _this = this;

    this.projects = [ ];
    this.search = "";

    ProjectService.getList().then(function(projects) {
      _this.projects = projects;
    });

    this.limitTo = 20;

    this.loadMore = function() {
      _this.limitTo += 20;
    }

  })
  .controller('ProjectCtrl', function($scope, ProjectService, $stateParams) {

    var _this = this;
    var stateParams = $stateParams.projectId;

    this.projects = [ ];

    ProjectService.find(stateParams).then(function(project) {
      _this.project = project;
    });
  });
