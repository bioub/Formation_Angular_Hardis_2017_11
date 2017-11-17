import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-common-directive',
  template: `
    <button (click)="isBlue = !isBlue">Toggle blue</button>
    <button (click)="isVisible = !isVisible">Toggle visibility</button>    
    <p [ngClass]="{blue: isBlue, hidden: !isVisible}">
      ngClass
    </p>
    <hello-horloge *ngIf="isVisible"></hello-horloge>
    <ul>
      <li *ngFor="let p of prenoms; let i = index; let isLast = last">
       {{i}} - {{p}}
       <button *ngIf="isLast">-</button>
      </li>
    </ul>
    <table>
      <ng-template ngFor let-p [ngForOf]="prenoms" let-i="index" let-isLast="last">
        <tr><td>{{i}}</td></tr>
        <tr><td>{{p}}</td></tr>
      </ng-template>
    </table>
  `,
  styles: [`
  .blue {
    background-color: blue;
  }
  .hidden {
    display: none;
  }
  `]
})
export class CommonDirectiveComponent implements OnInit {

  public isBlue = false;
  public isVisible = true;

  public prenoms = ['Romain', 'Jean', 'Eric'];

  constructor() { }

  ngOnInit() {
    /*
    for (let p of this.prenoms) {
      console.log(p);
    }
    */
  }

}
