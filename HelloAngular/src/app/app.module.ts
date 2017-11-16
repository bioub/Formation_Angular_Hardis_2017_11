import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { PropertyBindingsComponent } from './property-bindings/property-bindings.component';
import { EventBindingsComponent } from './event-bindings/event-bindings.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { ReferenceComponent } from './reference/reference.component';
import { CommonDirectiveComponent } from './common-directive/common-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    HorlogeComponent,
    PropertyBindingsComponent,
    EventBindingsComponent,
    NgModelComponent,
    ReferenceComponent,
    CommonDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
