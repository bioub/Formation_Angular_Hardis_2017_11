import { async } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent Isolated', () => {

  let formCmp: FormComponent;

  beforeEach(() => {
    formCmp = new FormComponent();
  });

  it('should create correctly', () => {
    expect(formCmp.todo.done).toBeFalsy();
    expect(formCmp.todo.value).toBe('');
  });

  it('should copy todo on submit', (done) => {
    formCmp.todo = {
      done: true,
      value: 'Sample Task'
    };

    formCmp.todoChange.subscribe((newTodo) => {
      expect(newTodo === formCmp.todo).toBeFalsy();
      expect(newTodo.value).toBe('Sample Task');
      done();
    });


    formCmp.addTodo();

  });

  it('should copy todo on submit', async(() => {
    formCmp.todo = {
      done: true,
      value: 'Sample Task'
    };

    formCmp.todoChange.subscribe((newTodo) => {
      expect(newTodo === formCmp.todo).toBeFalsy();
      expect(newTodo.value).toBe('Sample Task');
    });


    formCmp.addTodo();

  }));
});
