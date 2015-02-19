/**
 * Created by martinsuess on 01.02.15.
 */
'use strict';

angular.module('clients', [ ])
  .controller('ClientsCtrl', function ($scope) {
    $scope.date = new Date();

    $scope.clients = [
      {
        "id": "54d0e32f32d2c5887970c682",
        "name": "Mccray",
        "lastName": "Wolfe",
        "company": "GLOBOIL",
        "email": "undefined.undefined@globoil.net",
        "phone": "+1 (910) 591-3146",
        "address": "351 McKinley Avenue, Carbonville, Oregon, 8807",
        "registered": "Saturday, January 31, 2015 10:55 AM"
      },
      {
        "id": "54d0e32fd5caf84693e970b0",
        "name": "Lucas",
        "lastName": "Mitchell",
        "company": "UNCORP",
        "email": "undefined.undefined@uncorp.us",
        "phone": "+1 (877) 557-3814",
        "address": "469 Bryant Street, Chestnut, Wyoming, 1665",
        "registered": "Monday, January 19, 2015 6:39 PM"
      },
      {
        "id": "54d0e32f8c3518afab6c25e1",
        "name": "Mitzi",
        "lastName": "Clemons",
        "company": "NORALI",
        "email": "undefined.undefined@norali.org",
        "phone": "+1 (828) 551-2569",
        "address": "397 Pacific Street, Tibbie, Marshall Islands, 6056",
        "registered": "Sunday, March 2, 2014 9:36 PM"
      },
      {
        "id": "54d0e32fe5abbefc96d14c99",
        "name": "Gwendolyn",
        "lastName": "Langley",
        "company": "SECURIA",
        "email": "undefined.undefined@securia.biz",
        "phone": "+1 (870) 421-3134",
        "address": "895 Dumont Avenue, Lindisfarne, Northern Mariana Islands, 3824",
        "registered": "Thursday, February 27, 2014 7:27 AM"
      },
      {
        "id": "54d0e32fff4fa69fc6c0c5dc",
        "name": "Villarreal",
        "lastName": "Alston",
        "company": "COMBOGENE",
        "email": "undefined.undefined@combogene.co.uk",
        "phone": "+1 (906) 410-3524",
        "address": "258 Atlantic Avenue, Watrous, California, 7510",
        "registered": "Tuesday, January 6, 2015 5:51 AM"
      },
      {
        "id": "54d0e32f2f528a938fc2fd6d",
        "name": "Doris",
        "lastName": "Benjamin",
        "company": "ACLIMA",
        "email": "undefined.undefined@aclima.biz",
        "phone": "+1 (927) 408-3534",
        "address": "183 Nixon Court, Brazos, Arizona, 7629",
        "registered": "Friday, June 6, 2014 3:20 PM"
      },
      {
        "id": "54d0e32fe289097219cc5469",
        "name": "Odessa",
        "lastName": "Nunez",
        "company": "EGYPTO",
        "email": "undefined.undefined@egypto.io",
        "phone": "+1 (947) 438-3148",
        "address": "665 Grove Place, Cutter, Oklahoma, 6114",
        "registered": "Wednesday, November 12, 2014 6:11 PM"
      },
      {
        "id": "54d0e32f702259d67855f6ad",
        "name": "Alexander",
        "lastName": "Ward",
        "company": "ASSISTIA",
        "email": "undefined.undefined@assistia.me",
        "phone": "+1 (857) 473-2953",
        "address": "150 Bowne Street, Calvary, Indiana, 7356",
        "registered": "Friday, March 28, 2014 5:47 AM"
      }
    ];
  });
