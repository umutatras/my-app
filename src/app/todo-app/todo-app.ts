import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-app',
  imports: [FormsModule],
  template: `
  <h1>Todo App</h1>
  <div>
    <label>Work</label>
    <input [(ngModel)]="work">
    <button (click)="save()">save</button>
  </div>
  <hr>
  <diV>
    <ul>
      @for(data of todos;track data){
        <li>{{data}}</li>
        <button (click)="delete($index)">Delete</button>
      }
     <!-- <li *ngFor="let data of todos; let i=index">{{data}} <button (click)="delete(i)">Delete</button></li> eski tip -->
    </ul>
  </diV>
  `,
})
export class TodoApp {
work:string="";
todos:string[]=[];

save(){
  this.todos.push(this.work);
  this.work="";
}
delete(index:number){
  this.todos.splice(index,1);
}
}
