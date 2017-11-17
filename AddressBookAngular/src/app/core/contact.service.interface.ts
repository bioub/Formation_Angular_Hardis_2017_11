import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';

export interface ContactServiceInterface {
  getList(): Observable<Contact[]>;
  getById(id: number | string): Observable<Contact>;
  create(contact: Contact): Observable<Contact>;
}
