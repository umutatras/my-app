import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from "./home/home";
import { AboutComponent } from "./about/about.component";
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Contact, Home, AboutComponent, NgClass, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bgColor="red";
  helloWorld: string = 'Hello World abii';
 pClassName: string = 'red';
  clickMe(){
 alert('Tıklandı');
  }

  changeHellworldVariable(event:any){
    this.helloWorld=event.target.value;
  }
}
