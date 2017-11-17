import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../../core/contact.service';

@Component({
  selector: 'address-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {

  public contacts = [];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactService.getList()
      .subscribe(contacts => {
        this.contacts = contacts;
      });

  }

}
