(function() {
  'use strict';

  const module = angular.module('horloge', []);

  class HorlogeCtrl {
    constructor($interval) {
      this.now = new Date();
      $interval(() => {
        this.now = new Date();
      }, 1000);
    }
  }

  module.component('helloHorloge', {
    controller: HorlogeCtrl,
    templateUrl: 'app/horloge/horloge.template.html'
  });
}());
