import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private yonlendirici:Router) {
    
  }

  routeHomePage(){
  this.yonlendirici.navigate(['home']);
  }
}
