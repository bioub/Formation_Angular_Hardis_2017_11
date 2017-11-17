import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../core/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../core/contact';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'address-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(p => this.contactService.getById(p.id))
      .subscribe(c => {
        this.contact = c;
      });
  }

}
