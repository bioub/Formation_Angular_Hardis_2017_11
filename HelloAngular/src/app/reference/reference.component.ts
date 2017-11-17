import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-reference',
  template: `
    <div>
      Prénom : <input #prenomInput>
      <button (click)="prenom = prenomInput.value">+</button>
    </div>
    <p>
      Bonjour {{prenom}} ! <!-- sanitize -->
    </p>
    <hello-horloge #horloge="horlogeCmp"></hello-horloge>
    {{horloge.now | date: 'HH:mm:ss'}}
    <div >
      Prénom : <input 
                  required
                  [(ngModel)]="prenom" 
                  #prenomNgModel="ngModel"
                  >
      <span *ngIf="prenomNgModel.invalid && prenomNgModel.touched">
        Le prenom est obligatoire
        </span>
    </div>
    <p>
      Bonjour {{prenom}} ! <!-- sanitize -->
    </p>
  `,
  styles: []
})
export class ReferenceComponent implements OnInit {

  public prenom = 'Inconnu';

  constructor() { }

  ngOnInit() {
  }

}
