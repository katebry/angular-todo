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
  
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  add(task: string): void {
    task = task.trim();
    if (!task) { return; }
    this.todoService.addTodo({ task } as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
