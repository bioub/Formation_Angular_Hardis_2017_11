import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';
import { ContactServiceInterface } from './contact.service.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()
export class ContactService implements ContactServiceInterface {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getList(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(
      `${environment.apiUrl}/users`
    );
  }

  getById(id: number | string): Observable<Contact> {
    return this.httpClient.get<Contact>(
      `${environment.apiUrl}/users/${id}`
    );
  }

  create(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(
      `${environment.apiUrl}/users`,
      contact,
    );
  }

}
