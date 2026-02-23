import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from "./home/home";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [ Contact, Home, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  helloWorld: string = 'Hello World abii';

}
