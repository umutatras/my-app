import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: "", component: Home },
  { path: 'home', component: Home,canActivate: [authGuard] },
  { path: 'contact/:id', component: Contact },
  { path: 'about', component: AboutComponent },
];
