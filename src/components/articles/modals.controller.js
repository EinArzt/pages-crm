/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('article.modals', [ ])
  .controller('ArticleModalCtrl', function ($scope, $modal) {

    this.edit = function (article) {

      $modal.open({
        templateUrl: 'components/article/edit.modal.html',
        controller: 'ArticleEditModalCtrl',
        windowClass: 'stick-up',
        resolve: {
          article: function () {
            return article;
          }
        }
      });
    };

    this.new = function () {

      $modal.open({
        templateUrl: 'components/article/new.modal.html',
        controller: 'ArticleNewModalCtrl',
        windowClass: 'stick-up'
      });
    };
  })
  .controller('ArticleEditModalCtrl', function ($scope, $modalInstance, ArticleService, article) {

    $scope.origArticle = article;
    $scope.article = angular.copy(article);

    $scope.save = function () {
      ArticleService.edit($scope.article, $scope.origArticle);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.delete = function() {
      ArticleService.delete(article);
      $modalInstance.dismiss('cancel');
    }
  })
  .controller('ArticleNewModalCtrl', function ($scope, $modalInstance, ArticleService) {

    $scope.article = { };

    $scope.save = function () {
      ArticleService.new($scope.article);
      $modalInstance.close();
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
