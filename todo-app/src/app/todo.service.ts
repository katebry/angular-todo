import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private messageService: MessageService) {}

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    this.messageService.add('TodoService: fetched todos');
    return todos;
  }
}
