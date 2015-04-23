/**
 * Created by martinsuess on 22.04.15.
 */

'use strict';

angular.module('helper', [ ])
  .service('HelperService', function() {
    this.find = function(id, models) {
      for(var i = 0; i < models.length; i++) {
        if(models[i].id === id) {
          return models[i];
        }
      }
    };
  });
