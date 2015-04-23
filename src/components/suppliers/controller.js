/**
 * Created by martinsuess on 24.03.15.
 */

'use strict';

angular.module('suppliers', [ 'suppliers.modals', 'suppliers.services' ])
  .controller('SupplierCtrl', function ($scope, SupplierService) {

    var _this = this;

    this.supplier = [ ];
    this.search = "";

    this.supplier = SupplierService.get.all();
  });
