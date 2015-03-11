/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('factories', [ ])
  .service('UtilService', function() {
    this.isVisibleXs = function() {
      (!jQuery('#pg-visible-xs').length) && jQuery('body').append('<div id="pg-visible-xs" class="visible-xs" />');
      return $('#pg-visible-xs').is(':visible');
    };

    this.isVisibleSm = function() {
      (!jQuery('#pg-visible-sm').length) && jQuery('body').append('<div id="pg-visible-sm" class="visible-sm" />');
      return $('#pg-visible-sm').is(':visible');
    };
  })
  .service('NotificationService', function(pgNotificationService) {
    this.Client = {
      edit: {
        success: function(client) {
          pgNotificationService.success('Der Kunde ' + client.fullName + ' wurde erfolgreich bearbeitet.');
        },
        error: function() {
          pgNotificationService.error('Bei dem bearbeiten des Kunden ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      },
      new: {
        success: function(client) {
          pgNotificationService.success('Der Kunde ' + client.fullName + ' wurde erfolgreich erstellt.');
        },
        error: function() {
          pgNotificationService.error('Bei dem anlegen des Kunden ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      },
      delete: {
        success: function(client) {
          pgNotificationService.success('Der Kunde ' + client.fullName + ' wurde erfolgreich gelöscht.');
        },
        error: function() {
          pgNotificationService.success('Bei dem löschen des Kunden ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      }
    };

    this.Project = {
      edit: {
        success: function(project) {
          pgNotificationService.success('Das Projekt ' + project.name + ' wurde erfolgreich bearbeitet.');
        },
        error: function() {
          pgNotificationService.error('Bei dem bearbeiten des Projekts ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      },
      new: {
        success: function(project) {
          pgNotificationService.success('Das Projekt ' + project.name + ' wurde erfolgreich erstellt.');
        },
        error: function() {
          pgNotificationService.error('Bei dem anlegen des Projekts ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      },
      delete: {
        success: function(project) {
          pgNotificationService.success('Das Projekt ' + project.name + ' wurde erfolgreich gelöscht.');
        },
        error: function() {
          pgNotificationService.success('Bei dem löschen des Projekts ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      }
    };

    this.Employee = {
      edit: {
        success: function(employee) {
          pgNotificationService.success('Der Mitarbeiter ' + employee.fullName + ' wurde erfolgreich bearbeitet.');
        },
        error: function() {
          pgNotificationService.error('Bei dem bearbeiten des Mitarbeiters ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      },
      new: {
        success: function(employee) {
          pgNotificationService.success('Der Mitarbeiter ' + employee.fullName + ' wurde erfolgreich erstellt.');
        },
        error: function() {
          pgNotificationService.error('Bei dem anlegen des Mitarbeiters ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      },
      delete: {
        success: function(employee) {
          pgNotificationService.success('Der Mitarbeiter ' + employee.fullName + ' wurde erfolgreich gelöscht.');
        },
        error: function() {
          pgNotificationService.success('Bei dem löschen des Mitarbeiters ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
        }
      }
    };
  })
  .service('pgNotificationService', function() {
    this.success = function(message) {
      $('body').pgNotification({
        style: 'flip',
        message: message,
        position: 'top-right',
        type: 'success',
        showClose: true,
        timeout: 6000
      }).show();
    };

    this.error = function(message) {
      $('body').pgNotification({
        style: 'flip',
        message: message,
        position: 'top-right',
        type: 'danger',
        showClose: true,
        timeout: 6000
      }).show();
    };
  });
