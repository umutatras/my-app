import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example {
  work: string = 'Example Service';
  todos: string[] = ['Todo 1', 'Todo 2', 'Todo 3'];

  constructor() {}

  addTodo() {
    this.todos.push(this.work);
    this.work = '';
  }
}
