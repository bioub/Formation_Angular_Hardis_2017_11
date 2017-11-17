import { Component, OnInit } from '@angular/core';
import { Contact } from '../../core/contact';
import { ContactService } from '../../core/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'address-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public contact: Contact = {
    name: ''
  };

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ajouter() {
    this.contactService
      .create(this.contact)
      .subscribe(c => {
        this.router.navigate(['contacts', c.id]);
      });
  }
}
