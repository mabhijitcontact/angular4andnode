import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserAuthService {

  constructor(private _http: Http) { }

  result:any;

  doLogin(user){
    return this._http.post('/auth/login', user)
    .map(res => this.result = res.json());
  }

  doLogout(){
    window.localStorage.removeItem('localStorageUserID');
    window.localStorage.removeItem('localStorageUserName');
    return this._http.post('/auth/logout', '')
    .map(res => this.result = res.json());
  }

  getUserLoggedIn(){
    return this.result;
  }

}


