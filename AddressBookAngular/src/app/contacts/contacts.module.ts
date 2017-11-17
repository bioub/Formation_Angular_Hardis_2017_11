import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsComponent } from './contacts.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent, ContactsShowComponent, ContactsAddComponent, ContactsComponent]
})
export class ContactsModule { }
