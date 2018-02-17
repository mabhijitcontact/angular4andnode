import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _userAuthService: UserAuthService, private _router: Router) {

  }

  logOut(){
    this._userAuthService.doLogout().subscribe(
      res => {
        this._router.navigateByUrl('/');
      },
      error => {
        // login failed so display error
        throw new error('something wrong');
      });
  }
}
