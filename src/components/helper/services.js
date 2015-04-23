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

    this.isVisibleXs = function() {
      (!jQuery('#pg-visible-xs').length) && jQuery('body').append('<div id="pg-visible-xs" class="visible-xs" />');
      return $('#pg-visible-xs').is(':visible');
    };

    this.isVisibleSm = function() {
      (!jQuery('#pg-visible-sm').length) && jQuery('body').append('<div id="pg-visible-sm" class="visible-sm" />');
      return $('#pg-visible-sm').is(':visible');
    };
  });
