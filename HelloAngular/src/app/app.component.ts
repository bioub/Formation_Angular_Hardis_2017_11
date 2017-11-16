import { Component } from '@angular/core';

@Component({
  selector: 'hello-root',
  template: `
    <h2>Horloge</h2>
    <hello-horloge></hello-horloge>
    <hello-horloge [format]="'HH:mm'"></hello-horloge>
    <hello-horloge [format]="myFormat"></hello-horloge>
    <hello-horloge format="HH:mm" (dateChange)="handleDate($event)"></hello-horloge>
    <hr>
    <h2>Property bindings</h2>
    <hello-property-bindings></hello-property-bindings>
    <hr>
    <h2>Event bindings</h2>
    <hello-event-bindings></hello-event-bindings>
    <hr>
    <h2>Two way bindings</h2>
    <hello-ng-model></hello-ng-model>
    <hr>
    <h2>References</h2>
    <hello-reference></hello-reference>
    <hr>
    <h2>Common Directives</h2>
    <hello-common-directive></hello-common-directive>
    

    <!--<hardis-dropdown [items]="['Ajouter', 'Modifier']" (selectionChange)=""></hardis-dropdown>-->
  `,
  styles: []
})
export class AppComponent {
  title = 'Hello';
  myFormat = 'HH:mm'

  handleDate(date) {
    console.log(date);
  }
}
