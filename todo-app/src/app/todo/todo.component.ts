import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  selectedTodo?: Todo;

  todo: Todo = {
    id: 1,
    task: '',
  };
  
  constructor(private todoService: TodoService, private messageService: MessageService) {}
  
  ngOnInit(): void {
    this.getTodos()
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    this.messageService.add(`TodosComponent: Selected todo id=${todo.id}`);
  }
  
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

}
