import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  todo: Todo = {
    id: 1,
    task: 'Go to the bank',
  };

  constructor() {}

  ngOnInit(): void {}
}
