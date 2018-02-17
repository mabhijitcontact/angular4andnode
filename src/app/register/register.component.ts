import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;

  name:string ="My Name";
  email:string = "a@aa.com";
  password:string = "hell@0";
  username:string = "username";
  result: any;
  registerNotSuccess: boolean = true;

  constructor(private _http: Http, private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this._formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      username: [null,[Validators.required]],
      password: [null, Validators.required],
    });
  }

  addReg() {
    console.log(this.regForm.value);
    this._http.post('/auth/register', this.regForm.value)
    .subscribe(res => {
        this.result = res.json();
        if(this.result.message === 'success'){
          this._router.navigateByUrl('/login');
        } else {
          this.registerNotSuccess = false;
        }
      }
    );
  }

  
  isFieldValid(field: string) {
    console.log(!this.regForm.get(field).valid && this.regForm.get(field).touched);
    return !this.regForm.get(field).valid && this.regForm.get(field).touched;
  }
}
