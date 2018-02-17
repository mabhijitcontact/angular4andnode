import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string ="My Name";
  email:string = "a@aa.com";
  password:string = "hell@0";
  username:string = "username";
  result: any;
  registerNotSuccess: boolean = true;

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  addReg(f: NgForm) {
    console.log(f.value);
    this._http.post('/auth/register', f.value)
    .map(res => {
        this.result = res.json();
        if(this.result.message === 'success'){
          this._router.navigateByUrl('/login');
        } else {
          this.registerNotSuccess = false;
        }
      }
    );
  }
}
