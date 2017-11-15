(function() {
  'use strict';
  
  const module = angular.module('myApp.contacts-add', [
    'ui.router',
    'myApp.services.contact'
  ]);
  
  module.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      url: '/contacts-add',
      name: 'contacts-add',
      // ui-router 0.2.*
      // template: '<contacts-add></contacts-add>',
      // ui-router 1.*
      component: 'contactsAdd'
    });
  }]);

  class ContactsAddCtrl {
    constructor(contactService, $state) {
      this.contactService = contactService;
      this.$state = $state;
    }

    ajouter() {
      this.contactService.add(this.contact)
        .then(() => {
          this.$state.go('contacts');
        });

    }
  }
  
  module.component('contactsAdd', {
    controller: ContactsAddCtrl,
    templateUrl: 'contacts-add/contacts-add.template.html',
  });
}());

