/**
 * Created by Martin on 11.03.2015.
 */

'use strict';

angular.module('config', [ 'config.service' ])
  .controller('ConfigCtrl', function ($scope, ConfigService) {

    var _this = this;

    this.config = { };

    ConfigService.get.all().then(function(config) {
      _this.config = config;
    })
      .catch(function(e) {
        alert('error');
      });

    this.addWage = function() {
      ConfigService.wages.add();
    };

    this.deleteWage = function(wage) {
      ConfigService.wages.delete(wage);
    };

    this.saveWages = function(wage) {
      ConfigService.wages.save();
    }

  });
