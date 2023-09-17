import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = () => {
  return inject(AuthService).isAuthenticated()
  ? true
  : inject(Router).parseUrl('/login');

};

// Outra forma mais escrita:
// const authService = inject(AuthService);
//   const router = inject(Router);

//   if (authService.isAuthenticated()) {
//     return true;
//   }

//   // Redirect to the login page
//   return router.parseUrl('/login');


