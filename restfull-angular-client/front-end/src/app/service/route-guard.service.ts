import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { BasicAuthenticationService } from "./../service/hardcoded-authentication.service";


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authenticationService: BasicAuthenticationService,
     private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if( this.authenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}
