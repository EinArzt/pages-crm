/**
 * Created by martinsuess on 23.04.15.
 */

'use strict';

angular.module('pagination', [ ])
  .controller('PaginationCtrl', function(HelperService) {
    this.greaterSmall = function() {
      if(!HelperService.isVisibleSm() && !HelperService.isVisibleXs())
        return true;
    };
  });
