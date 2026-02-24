import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: "", component: Home },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  { path: 'about', component: AboutComponent },
];
