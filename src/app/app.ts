import { Component, HostListener, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { Renklendir } from './renklendir';
import { TodoPipe } from './pipe/todo-pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Renklendir,TodoPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 name:string = "Angular";
  constructor(private yonlendirici:Router) {

  }
  checkInputValidation(event:any){
    console.log(event.target.validity.valid);
  }

  routeHomePage(){
  this.yonlendirici.navigate(['home']);
  }
}
