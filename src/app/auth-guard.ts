import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token:string | null = localStorage.getItem('token');
  if (token) {
    // Allow access to the route
    router.navigate(['/home']);
    return true;
  } else {
    // Redirect to login page or show an error message
    window.alert('You must be logged in to access this page.');
    router.navigate(['/login']);
    return false;
  }
};
