import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 11, task: 'Clean bedroom' },
      { id: 12, task: 'Take out bins' },
      { id: 13, task: 'Wash dishes' },
      { id: 14, task: 'Mop kitchen' },
      { id: 15, task: 'Go to skip' },
      { id: 16, task: 'Change bedsheets' },
      { id: 17, task: 'Mow grass' },
    ];
    return { todos };
  }

  // Overrides the genId method to ensure that a todo always has an id.
  // If the todos array is empty, the method below returns the initial number (11).
  // If the todos array is not empty, the method below returns the highest todo id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0
      ? Math.max(...todos.map((todo) => todo.id)) + 1
      : 11;
  }
}
