import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { DetailsComponent } from '../details/details.component';

describe('ListComponent', () => {

  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.todos = [{
      done: true,
      value: 'Introduction à Angular'
    }, {
      done: false,
      value: 'Chapitre sur NgModule'
    }];

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('todo-details').length).toBe(2);
  });
});
