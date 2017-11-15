'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  /*
  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });
  */


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#!/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });

  describe('contacts-list', function() {
    
    beforeEach(function() {
      browser.get('index.html#!/contacts');
    });


    it('should render contact-list when user navigates to /contacts', function() {
      expect(element.all(by.css('[ui-view] h2')).first().getText()).
        toMatch(/Liste de contacts/);

        expect(element.all(by.css('[ui-view] li')).count()).toBe(10);
    });

  });

  describe('contacts-add', function() {
    
    beforeEach(function() {
      browser.get('index.html#!/contacts-add');
    });


    it('should render contact-list when user submits form', function() {
      element(by.model('$ctrl.contact.name')).sendKeys('Romain');
      element(by.css('form button')).click();

      expect(element.all(by.css('[ui-view] h2')).first().getText()).
        toMatch(/Liste de contacts/);
    });

  });
});
