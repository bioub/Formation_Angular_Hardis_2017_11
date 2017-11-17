import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-property-bindings',
  template: `
    <div bind-textContent="prenom"></div>
    <input bind-value="prenom">
    <div [textContent]="prenom"></div>
    <input [value]="prenom + '!'">
    
    <div>
      Nom <input [(ngModel)]="nom">
    </div>
    
    {{nom}}

    <!-- bind une propriété du DOM -->
    <div [className]="prenom"></div>
    <!-- bind un attribut du HTML -->
    <div [attr.class]="prenom"></div>
  `,
  styles: []
})
export class PropertyBindingsComponent implements OnInit {

  public prenom = 'Romain';
  private _nom = 'Bohdanowicz';

  constructor() { }

  ngOnInit() {
  }

  get nom() {
    return this._nom;
  }

  set nom(val: string) {
    this._nom = val.toUpperCase();
  }

}
