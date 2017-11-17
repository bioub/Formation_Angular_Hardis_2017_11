import { Injectable } from '@angular/core';
import { ContactServiceInterface } from './contact.service.interface';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class FakeContactService implements ContactServiceInterface {

  private contacts: Contact[] = [{
    id: 123,
    name: 'Steve Jobs'
  }, {
    id: 456,
    name: 'Bill Gates'
  }];

  constructor() { }

  getList(): Observable<Contact[]> {
    return Observable.of(this.contacts);
  }

  getById(id: number | string): Observable<Contact> {
    if (typeof id === 'string') {
      id = Number(id);
    }

    const contact = this.contacts.find(c => c.id === id);

    return Observable.of(contact)
      .delay((id === 123) ? 1000 : 5000);
  }

  create(contact: Contact): Observable<Contact> {

    contact = Object.assign({}, contact);

    contact.id = this.contacts.reduce((acc, c) => {
      if (c.id > acc) {
        return c.id;
      }
      return acc;
    }, 0) + 1;

    this.contacts.push(contact);

    return Observable.of(contact);
  }



}
