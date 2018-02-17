import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  retVal:any;
  isLoggedIn: boolean = false;
  cUserID:any;
  constructor(private _router: Router, private _userAuthService: UserAuthService) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.retVal= this._userAuthService.getUserLoggedIn();
    if(typeof this.retVal !== 'undefined'){
      console.log('Im here inside Auth Gaurd');
      this.isLoggedIn = this.retVal.isLoggedIn;      
    } 

    if(!this.isLoggedIn) {
      this._router.navigate(["/login"]);
    } 
    return this.isLoggedIn;
  }
}
