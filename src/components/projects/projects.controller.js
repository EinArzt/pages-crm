/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('projects', [ 'projects.services', 'projects.modals' ])
  .controller('ProjectsCtrl', function ($scope, ProjectService) {

    var _this = this;

    this.projects = [ ];
    this.search = "";
    this.isLoading = true;
    this.limitTo = 20;

    this.loadMore = function() {
      _this.limitTo += 20;
    };

    ProjectService.getList().then(function(projects) {
      _this.projects = projects;
      _this.isLoading = false;
    });

  })
  .controller('ProjectCtrl', function($scope, ProjectService, $stateParams) {

    var _this = this;
    var stateParams = $stateParams.projectId;

    this.projects = [ ];

    ProjectService.find(stateParams).then(function(project) {
      _this.project = project;
    });
  });
