/**
 * Created by martinsuess on 08.05.15.
 */

'use strict';

angular.module('progress', [ ])
  .directive('portletProgress', function($compile) {
    return {
      restrict: 'E',
      scope: {
        msType: '@',
        msActive: '='
      },
      link: function(scope, element, attrs) {
        var newElement;
        var html;
        var type = scope.msType.toUpperCase();

        if (type === 'CIRCLE') {
          html = '<div class="portlet-progress">';
          html += '<div class="progress-circle-indeterminate progress-circle-master"></div>';
          html += '</div>';
          newElement = $compile(html)(scope);
        } else if(type === 'BAR') {
          html = '<div class="portlet-progress"><div class="progress progress-small">';
          html += '<div class="progress-bar-indeterminate progress-bar-master"></div>';
          html += '</div></div>';
          newElement = $compile(html)(scope);
        } else {
          // else Bar
          html = '<div class="portlet-progress"><div class="progress progress-small">';
          html += '<div class="progress-bar-indeterminate progress-bar-master"></div>';
          html += '</div></div>';
          newElement = $compile(html)(scope);
        }
        element.replaceWith(newElement); // Replace the DOM
        element = newElement;            // Replace the 'element' reference

        scope.$watch('msActive', function() {
          if(scope.msActive) {
            element.fadeIn();
          } else {
            element.fadeOut();
          }
        });

      }
    }
  });
