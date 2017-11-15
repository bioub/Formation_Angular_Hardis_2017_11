
(function() {
  'use strict';

  const module = angular.module('myApp.services.contact', [

  ]);

  /*
  module.value('contactService', {
    getList() {
      console.log('getList');
    }
  })
  */

  module.value('apiRestUrl', 'https://jsonplaceholder.typicode.com/users');

  class ContactService {
    constructor($http, apiRestUrl) {
      this.$http = $http;
      this.apiRestUrl = apiRestUrl;
    }
    getList() {
      return this.$http.get(this.apiRestUrl);
    }
    getById($id) {
      return this.$http.get(`${this.apiRestUrl}/${id}`);
    }
    add(data) {
      return this.$http.post(this.apiRestUrl, data);
    }
  }

  module.service('contactService', ContactService);

  /*
  module.factory('contactService', function($http) {
    return {
      getList() {
        console.log('getList');
      },
      getById() {
        console.log('getList');
      }
    };
  });
  */
}());


