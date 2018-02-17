import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BookDataService } from './book-data.service';
import { UserAuthService } from './user-auth.service';
import {AuthGuard} from './auth.guard';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';

const appRoutes: Routes = [
  { path: 'books',      component: BookComponent },
  { path: 'add-books', 
    canActivate: [AuthGuard],
    component: AddEditBookComponent },
  { path: 'login',      component: LoginComponent },
  { path: '',           redirectTo: 'books', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    RegisterComponent,
    AddEditBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  providers: [BookDataService, AuthGuard, UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor () {
    window.localStorage.removeItem('localStorageUserID');
    window.localStorage.removeItem('localStorageUserName');
  }
}
