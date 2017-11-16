import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-ng-model',
  template: `
  <div>
    Prénom : <input [ngModel]="prenom" (ngModelChange)="prenom = $event">
  </div>
  <div>
    Prénom : <input [(ngModel)]="prenom">
  </div>
  <p>
    Bonjour <span [innerText]="prenom"></span> !
  </p>
  `,
  styles: []
})
export class NgModelComponent implements OnInit {

  public prenom = 'Inconnu';

  constructor() { }

  ngOnInit() {
  }

}
