'use strict';

describe('myApp.contacts-list module', function() {

  beforeEach(module('myApp.contacts-list'));

  describe('contacts-list component', function(){

    it('should ....', inject(function($componentController, contactService) {
      //spec body
      contactService.getList = function() {
        return {
          then(cb) {
            cb({data: [{name: 'Toto'}, {name: 'Titi'}]})
          }
        }
      };

      var $ctrl = $componentController('contactsList');
      expect($ctrl).toBeDefined();
      expect($ctrl.users instanceof Array).toBeTruthy()
    }));

  });
});