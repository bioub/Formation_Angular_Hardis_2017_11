(function() {
  'use strict';
  
  const module = angular.module('myApp.contacts-list', [
    'ui.router',
    'myApp.services.contact'
  ]);
  
  module.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      url: '/contacts',
      name: 'contacts',
      // ui-router 0.2.*
      // template: '<contacts-list></contacts-list>',
      // ui-router 1.*
      component: 'contactsList'
    });
  }]);

  class ContactsListCtrl {
    constructor(contactService) {
      this.users = [];
      contactService.getList()
        .then(res => {
          console.log('Res', res);
          this.users = res.data;
        });
      /*
      $http.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          this.users = res.data;
        });
        */
    }
  }
  
  module.component('contactsList', {
    controller: ContactsListCtrl,
    templateUrl: 'contacts-list/contacts-list.template.html',
  });
}());

