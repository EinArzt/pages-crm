/**
 * Created by martinsuess on 10.05.15.
 */

'use strict';

angular.module('appendSymbolDirective',  [ ])
  .directive('appendSymbol', function() {
    return {
      restrict: 'A',
      scope: {
        appendSymbol: '@'
      },
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelController) {
        var symbol = scope.appendSymbol;

        ngModelController.$parsers.push(function(data) {
          //convert data from view format to model format
          data.trim().replace(symbol, '');
          return data; //converted
        });

        ngModelController.$formatters.push(function(data) {
          //convert data from model format to view format
          data += symbol;
          return data; //converted
        });
      }
    }
  });
