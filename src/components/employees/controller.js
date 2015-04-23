/**
 * Created by martinsuess on 08.03.15.
 */

'use strict';

angular.module('employees', [ 'employees.services', 'employees.modals' ])
  .controller('EmployeesCtrl', function(EmployeeService) {

    var _this = this;
    this.search = "";
    this.employees = [ ];

    EmployeeService.getList().then(function(resp) {
      _this.employees = resp;
    });
  });
