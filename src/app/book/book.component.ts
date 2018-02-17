import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<any>;

  constructor(private _bookDataService: BookDataService ) { 
    var getLocalUserID = window.localStorage.getItem('localStorageUserID');
    if(typeof getLocalUserID === 'undefined' || getLocalUserID === null) {
      this._bookDataService.getBooks()
        .subscribe(res => this.books = res);
    } else {
      this._bookDataService.getBookByUser(window.localStorage.getItem('localStorageUserID'))
        .subscribe(res => this.books = res);
    }
  }

  ngOnInit() {
  }

}
