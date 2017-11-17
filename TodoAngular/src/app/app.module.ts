import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FormComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
