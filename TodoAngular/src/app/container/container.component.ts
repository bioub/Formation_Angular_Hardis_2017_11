import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public todoContainer: Todo = {
    done: false,
    value: 'Créer un nouveau projet',
  };

  public todos: Todo[] = [{
    done: true,
    value: 'Introduction à Angular'
  }, {
    done: false,
    value: 'Chapitre sur NgModule'
  }];

  constructor() { }

  ngOnInit() {
  }

  addToArray(todo) {
    // Muable
    // this.todos.unshift(todo);

    // Immuable (nécessaire pour changeDetection: ChangeDetectionStrategy.OnPush,)
    this.todos = [todo, ...this.todos];
  }
}
