import { Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { Renklendir } from './renklendir';
import { TodoPipe } from './pipe/todo-pipe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Renklendir,TodoPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos:any[] = [];
  readonly http=inject(HttpClient);
 name:string = "Angular";
  constructor(private yonlendirici:Router) {

  }

  get(){
    this.http.get<any>("https://jsonplaceholder.typicode.com/todos/1").subscribe({
      next:(res)=>{
        this.todos=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  checkInputValidation(event:any){
    console.log(event.target.validity.valid);
  }

  routeHomePage(){
  this.yonlendirici.navigate(['home']);
  }
}
