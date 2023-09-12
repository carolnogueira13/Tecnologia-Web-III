import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service'


export class AutoGuard{
  constructor(private autoService: AuthService, private router: Router){}

  CanActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let authenticated = this.autoService.isAuthenticated();

    if (!authenticated){
      this.router.navigate(['login']);
      return false;
    }

    return authenticated;
  }
}

