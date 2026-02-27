import { Component, HostListener, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { Renklendir } from './renklendir';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Renklendir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private yonlendirici:Router) {

  }
  checkInputValidation(event:any){
    console.log(event.target.validity.valid);
  }

  routeHomePage(){
  this.yonlendirici.navigate(['home']);
  }
}
