import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  todos = TODOS

  todo: Todo = {
    id: 1,
    task: 'Go to the bank',
  };

  constructor() {}

  ngOnInit(): void {}
}
