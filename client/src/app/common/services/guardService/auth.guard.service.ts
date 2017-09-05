import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras} from "@angular/router";
import {AuthService} from "../authService/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (state.url !== '/login' && !this.authService.isAuthenticated()) {
      this.authService.logout();
      var navigationExtras : NavigationExtras = {
        queryParams: { 'redirectUrl': state.url }
      };
      this.router.navigate(['/login'], navigationExtras );
      return false;
    }

    return true;
  }
}
