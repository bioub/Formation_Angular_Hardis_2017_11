import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponent } from './contacts-list.component';
import { FakeContactService } from '../../core/fake-contact.service';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListComponent ],
      providers: [
        {provide: 'ContactService', useClass: FakeContactService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
