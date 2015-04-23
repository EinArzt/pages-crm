/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('article.services', [ ])
  .service('ArticleService', function(NotificationService, Restangular) {

    var articles = [ ];
    var API = Restangular.all('articles');

    var articlesReq = API.getList();
    articles = articlesReq.$object;

    this.get = {
      all: function() {
        return articles;
      },
      byId: function(id) {
        return articlesReq.then(function() {
          for(var i = 0; i < articles.length; i++) {
            if(articles[i].id === id) {
              return articles[i];
            }
          }
        });
      }
    };

    this.edit = function(article, origArticle) {
      var temp = Restangular.copy(article);
      Restangular.copy(article, origArticle);

      origArticle.put().then(function() {
        NotificationService.Client.edit.success(origArticle);
      }, function error() {
        Restangular.copy(temp, article);
        NotificationService.Client.edit.error();
      });
    };

    this.new = function(article) {
      var temp = Restangular.copy(article);

      article.fullName = article.name + ' ' + article.lastName;
      article.address = article.street + ', ' + article.zipcode + ' ' + article.city;

      API.post(article).then(function(resp) {
        articles.push(resp);

        NotificationService.Client.new.success(article);
      }).catch(function(e) {
        article.fullName = temp.fullName;
        article.address = temp.address;

        NotificationService.Client.new.error();
      });

      //$rootScope.$broadcast('CLIENTS_UPDATE');
    };

    this.delete = function(article) {
      article.remove().then(function() {
        var index = articles.indexOf(article);
        if (index > -1) articles.splice(index, 1);

        NotificationService.Client.delete.success(article);
      }, function error() {
        NotificationService.Client.delete.error();
      });

      //TODO Add Papierkorb so that articles dont get deleted immediately only after 30 days.
    };
  });
