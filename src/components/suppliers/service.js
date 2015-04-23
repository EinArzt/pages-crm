/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('suppliers.services', [ ])
  .service('SupplierService', function(NotificationService, Restangular) {

    var suppliers = [ ];
    var API = Restangular.all('suppliers');

    var suppliersReq = API.getList();
    suppliers = suppliersReq.$object;

    this.get = {
      all: function() {
        return suppliers;
      },
      byId: function(id) {
        return suppliersReq.then(function() {
          for(var i = 0; i < suppliers.length; i++) {
            if(suppliers[i].id === id) {
              return suppliers[i];
            }
          }
        });
      }
    };

    this.edit = function(supplier, origSupplier) {
      var temp = Restangular.copy(supplier);
      Restangular.copy(supplier, origSupplier);

      origSupplier.put().then(function() {
        NotificationService.Supplier.edit.success(origSupplier);
      }, function error() {
        Restangular.copy(temp, supplier);
        NotificationService.Supplier.edit.error();
      });
    };

    this.new = function(supplier) {
      // THIS below me in Service with Argument
      API.post(supplier).then(function(resp) {
        suppliers.push(resp);
        NotificationService.Supplier.new.success(supplier);
      }).catch(function(e) {
        NotificationService.Supplier.new.error();
      });

      //$rootScope.$broadcast('CLIENTS_UPDATE');
    };

    this.delete = function(supplier) {
      supplier.remove().then(function() {
        var index = suppliers.indexOf(supplier);
        if (index > -1) suppliers.splice(index, 1);

        NotificationService.Supplier.delete.success(supplier);
      }, function error() {
        NotificationService.Supplier.delete.error();
      });

      //TODO Add Papierkorb so that suppliers dont get deleted immediately only after 30 days.
    };
  });
