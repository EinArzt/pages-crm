/**
 * Created by martinsuess on 22.02.15.
 */

'use strict';

angular.module('clients.services', [ ])
  .service('ClientService', function(NotificationService) {
    var clients = [
      {
        "id": 0,
        "title": "Herr",
        "name": "Pacheco",
        "lastName": "Blankenship",
        "fullName": "Pacheco Blankenship",
        "company": "UNDERTAP",
        "email": "pacheco.blankenship@undertap.org",
        "phone": "+49 (831) 592-2770",
        "street": "Hancock Street 59",
        "city": "Grenelefe",
        "zipcode": 32576,
        "address": "Hancock Street 59, 32576 Grenelefe"
      },
      {
        "id": 1,
        "title": "Herr",
        "name": "Coleman",
        "lastName": "Cantrell",
        "fullName": "Coleman Cantrell",
        "company": "MEMORA",
        "email": "coleman.cantrell@memora.com",
        "phone": "+49 (861) 542-2353",
        "street": "Fleet Walk 10",
        "city": "Ribera",
        "zipcode": 24632,
        "address": "Fleet Walk 10, 24632 Ribera"
      },
      {
        "id": 2,
        "title": "Herr",
        "name": "Wright",
        "lastName": "Gaines",
        "fullName": "Wright Gaines",
        "company": "MUSAPHICS",
        "email": "wright.gaines@musaphics.info",
        "phone": "+49 (817) 537-2910",
        "street": "Bowery Street 19",
        "city": "Lupton",
        "zipcode": 49914,
        "address": "Bowery Street 19, 49914 Lupton"
      },
      {
        "id": 3,
        "title": "Frau",
        "name": "Delia",
        "lastName": "Dominguez",
        "fullName": "Delia Dominguez",
        "company": "ENERSOL",
        "email": "delia.dominguez@enersol.me",
        "phone": "+49 (944) 426-2715",
        "street": "Mill Road 31",
        "city": "Bend",
        "zipcode": 27388,
        "address": "Mill Road 31, 27388 Bend"
      },
      {
        "id": 4,
        "title": "Herr",
        "name": "Mae",
        "lastName": "Romero",
        "fullName": "Mae Romero",
        "company": "BIOTICA",
        "email": "mae.romero@biotica.io",
        "phone": "+49 (963) 589-3258",
        "street": "Strauss Street 11",
        "city": "Elliston",
        "zipcode": 37977,
        "address": "Strauss Street 11, 37977 Elliston"
      },
      {
        "id": 5,
        "title": "Herr",
        "name": "Elliott",
        "lastName": "Patterson",
        "fullName": "Elliott Patterson",
        "company": "IMAGINART",
        "email": "elliott.patterson@imaginart.us",
        "phone": "+49 (816) 523-2242",
        "street": "Crosby Avenue 39",
        "city": "Freeburn",
        "zipcode": 46410,
        "address": "Crosby Avenue 39, 46410 Freeburn"
      },
      {
        "id": 6,
        "title": "Herr",
        "name": "Henson",
        "lastName": "Pate",
        "fullName": "Henson Pate",
        "company": "BIOLIVE",
        "email": "henson.pate@biolive.name",
        "phone": "+49 (826) 503-3438",
        "street": "Sutton Street 22",
        "city": "Leola",
        "zipcode": 42707,
        "address": "Sutton Street 22, 42707 Leola"
      },
      {
        "id": 7,
        "title": "Herr",
        "name": "Bowman",
        "lastName": "Jarvis",
        "fullName": "Bowman Jarvis",
        "company": "APEXTRI",
        "email": "bowman.jarvis@apextri.ca",
        "phone": "+49 (940) 529-3718",
        "street": "Sandford Street 45",
        "city": "Turpin",
        "zipcode": 34946,
        "address": "Sandford Street 45, 34946 Turpin"
      },
      {
        "id": 8,
        "title": "Frau",
        "name": "Helen",
        "lastName": "Witt",
        "fullName": "Helen Witt",
        "company": "UNEEQ",
        "email": "helen.witt@uneeq.net",
        "phone": "+49 (919) 474-3755",
        "street": "Devon Avenue 66",
        "city": "Hackneyville",
        "zipcode": 38892,
        "address": "Devon Avenue 66, 38892 Hackneyville"
      },
      {
        "id": 9,
        "title": "Frau",
        "name": "Myrna",
        "lastName": "Rutledge",
        "fullName": "Myrna Rutledge",
        "company": "KYAGORO",
        "email": "myrna.rutledge@kyagoro.tv",
        "phone": "+49 (937) 485-2194",
        "street": "Ocean Court 51",
        "city": "Bainbridge",
        "zipcode": 43176,
        "address": "Ocean Court 51, 43176 Bainbridge"
      },
      {
        "id": 10,
        "title": "Herr",
        "name": "Sims",
        "lastName": "Roach",
        "fullName": "Sims Roach",
        "company": "FRANSCENE",
        "email": "sims.roach@franscene.co.uk",
        "phone": "+49 (848) 539-3996",
        "street": "Graham Avenue 41",
        "city": "Brecon",
        "zipcode": 31288,
        "address": "Graham Avenue 41, 31288 Brecon"
      },
      {
        "id": 11,
        "title": "Herr",
        "name": "Haney",
        "lastName": "Reilly",
        "fullName": "Haney Reilly",
        "company": "STROZEN",
        "email": "haney.reilly@strozen.biz",
        "phone": "+49 (879) 446-3969",
        "street": "Irving Place 5",
        "city": "Grahamtown",
        "zipcode": 33511,
        "address": "Irving Place 5, 33511 Grahamtown"
      },
      {
        "id": 12,
        "title": "Herr",
        "name": "Floyd",
        "lastName": "Nichols",
        "fullName": "Floyd Nichols",
        "company": "BUZZMAKER",
        "email": "floyd.nichols@buzzmaker.org",
        "phone": "+49 (996) 587-2305",
        "street": "Sumpter Street 36",
        "city": "Odessa",
        "zipcode": 20968,
        "address": "Sumpter Street 36, 20968 Odessa"
      },
      {
        "id": 13,
        "title": "Herr",
        "name": "Torres",
        "lastName": "Henson",
        "fullName": "Torres Henson",
        "company": "COMVERGES",
        "email": "torres.henson@comverges.com",
        "phone": "+49 (958) 400-2699",
        "street": "Amboy Street 61",
        "city": "Nile",
        "zipcode": 36142,
        "address": "Amboy Street 61, 36142 Nile"
      },
      {
        "id": 14,
        "title": "Frau",
        "name": "Marietta",
        "lastName": "Ayers",
        "fullName": "Marietta Ayers",
        "company": "QUAILCOM",
        "email": "marietta.ayers@quailcom.info",
        "phone": "+49 (884) 415-2516",
        "street": "Empire Boulevard 29",
        "city": "Ola",
        "zipcode": 28485,
        "address": "Empire Boulevard 29, 28485 Ola"
      }
    ];

    this.get = {
      all: function() {
        return clients;
      },
      byId: function() {

      }
    };

    this.edit = function(client, origClient) {
      angular.copy(client, origClient);
      origClient.fullName = client.name + ' ' + client.lastName;
      origClient.address = client.street + ', ' + client.zipcode + ' ' + client.city;

      NotificationService.Client.edit.success(origClient);
    };

    this.new = function(client) {
      client.fullName = client.name + ' ' + client.lastName;
      client.address = client.street + ', ' + client.zipcode + ' ' + client.city;

      clients.push(client);

      //$rootScope.$broadcast('CLIENTS_UPDATE');

      NotificationService.Client.new.success(client);
    };

    this.delete = function(client) {
      for (var i in clients) {
        if (clients[i].id == client.id) {
          clients.splice(i, 1);
        }
      }

      NotificationService.Client.delete.success(client);

      //TODO Add Papierkorb so that clients dont get deleted immediately only after 30 days.
    };
  });
