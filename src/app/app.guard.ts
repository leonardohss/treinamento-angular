import { ActivatedRouteSnapshot, CanLoad, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
 export class AppGuard implements CanActivate, CanLoad {

    constructor(
      private authenticationService: AuthenticationService,
      private router: Router
    ) {  }

    canActivate(
      activatedRouteSnapshot: ActivatedRouteSnapshot,
      routerStateSnapshot: RouterStateSnapshot
    ): boolean {
      const canActivate = this.authenticationService.isLoggedIn();
      if (canActivate) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }

    canLoad(route: Route): boolean {
        return this.authenticationService.isLoggedIn();
    }

 }
