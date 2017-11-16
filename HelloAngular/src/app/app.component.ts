import { Component } from '@angular/core';

@Component({
  selector: 'hello-root',
  template: `
    <h2>Horloge</h2>
    <hello-horloge></hello-horloge>
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
  `,
  styles: []
})
export class AppComponent {
  title = 'Hello';
}
