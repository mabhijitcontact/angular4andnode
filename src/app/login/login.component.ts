import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any = {};
  returnUrl: string;

  constructor(
    private _userAuthService: UserAuthService, 
    private _router: Router, 
    private _route: ActivatedRoute,) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitLogin(f: NgForm) {
    console.log(f);
    this._userAuthService.doLogin(f.value).subscribe(
      res => {
        window.localStorage.setItem('localStorageUserID', res.user._id);
        window.localStorage.setItem('localStorageUserName', res.user.username);
        window.localStorage.setItem('isLoggedin', res.isLoggedIn);
        this._router.navigateByUrl(this.returnUrl);
      },
      error => {
        // login failed so display error
        throw new error('something wrong');
      });
  }

}
