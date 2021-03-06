/**
 * Created by martinsuess on 19.02.15.
 */

'use strict';

angular.module('notifications', [ ])
  .service('NotificationService', function(pgNotificationService) {
    this.clients = {
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

    this.projects = {
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

    this.employees = {
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

    this.Config = {
      wages: {
        edit: {
          success: function() {
            pgNotificationService.success('Alle Lohngruppen wurden erfolgreich gespeichert.');
          },
          error: function() {
            pgNotificationService.error('Bei dem speichern der Lohngruppen ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
          }
        },
        add: {
          success: function() {
            pgNotificationService.success('Die Lohngruppe wurde erfolgreich erstellt.');
          },
          error: function() {
            pgNotificationService.error('Bei dem hinzufügen der Lohngruppe ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
          }
        },
        delete: {
          success: function() {
            pgNotificationService.success('Die Lohngruppe wurde erfolgreich gelöscht.');
          },
          error: function() {
            pgNotificationService.success('Bei dem löschen der Lohngruppe ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.');
          }
        }
      }
    }
  })
  .service('pgNotificationService', function() {
    this.success = function(message) {
      $('body').pgNotification({
        style: 'simple',
        message: message,
        position: 'top-right',
        type: 'success',
        showClose: true,
        timeout: 8000
      }).show();
    };

    this.error = function(message) {
      $('body').pgNotification({
        style: 'simple',
        message: message,
        position: 'top-right',
        type: 'danger',
        showClose: true,
        timeout: 8000
      }).show();
    };
  });
