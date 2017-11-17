import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  public todo: Todo = {
    done: false,
    value: ''
  };

  @Output()
  public todoChange = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    // Que le premier niveau
    const copy = Object.assign({}, this.todo);
    // si Récursif -> lodash.cloneDeep

    this.todoChange.emit(copy);
  }

}
