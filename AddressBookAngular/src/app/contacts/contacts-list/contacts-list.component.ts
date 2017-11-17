import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'address-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts = [];

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get<any[]>(apiUrl)
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

}
