import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-event-bindings',
  template: `
  <div>
    Prénom : <input on-input="prenom = $event.target.value">
  </div>
  <div>
    Prénom : <input (input)="prenom = $event.target.value">
  </div>
  <div>
    Prénom : <input (input)="updatePrenom($event)">
  </div>
  <p>
    Bonjour <span [innerText]="prenom"></span> !
  </p>

  <p>
    Prénom : <input (input)="updatePrenom($event)">
    <button (click)="addPrenom()"></button>
  </p>
  `,
  styles: []
})
export class EventBindingsComponent implements OnInit {

  public prenom = 'Inconnu';

  constructor() { }

  ngOnInit() {
  }

  updatePrenom(event) {
    this.prenom = event.target.value;
  }

  addPrenom() {
    // this.prenoms.push(this.prenom);
  }
}
