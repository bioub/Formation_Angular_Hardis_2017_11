'use strict';

describe('myApp.contacts-list module', function() {

  beforeEach(module('myApp.contacts-list'));

  describe('contacts-list component', function(){

    it('should ....', inject(function($componentController, contactService) {
      //spec body
      // Sinon.js : bibliothèque de mock / stub / spy
      contactService.getList = function() {
        return {
          then(cb) {
            //var spy = jasmine.createSpy(cb);
            cb({data: [{name: 'Toto'}, {name: 'Titi'}]})
            //expect(spy).toHaveBeenCalledTimes(1);
          }
        }
      };

      var $ctrl = $componentController('contactsList');
      expect($ctrl).toBeDefined();
      expect($ctrl.users instanceof Array).toBeTruthy()
    }));

  });
});