import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getTodo(id: number): Observable<Todo> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`TodoService: fetched todo id=${id}`);
    return of(TODOS.find(todo => todo.id === id));
  }

}
