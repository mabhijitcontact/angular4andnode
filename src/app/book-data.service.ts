import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {
  result:any;
  constructor(private _http: Http) { }

  getBooks() {
    return this._http.get("/api/books")
      .map(result => this.result = result.json());
  }

  getBookByUser(userid) {
    //let params = new HttpParams().set('_id', userid);
    return this._http.get("/api/books/"+userid)
      .map(result => this.result = result.json());
  }

  postBook(params){
    params.userid = window.localStorage.getItem('localStorageUserID');
    return this._http.post("/api/books", params)
    .map(result => this.result = result.json());
  }

}
