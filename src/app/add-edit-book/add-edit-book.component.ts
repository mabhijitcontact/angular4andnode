import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  result: any = {};
  returnUrl: string;
  book: any = {};

  bookModel: any = {
		title: "Please Add",
		description: "Please Add description",
		author: "Please Add author",
		image_url: "Please Add image url",
		courses: {
      title: "Please Add course title",
      description: "Please Add course desc"
    },
  }
  
  constructor(private _bookDataService: BookDataService) { }

  ngOnInit() {
  }

  addData(f: NgForm) {
    console.log('--------sdsdadddasdasd--------');
    console.log(f.value);
    this._bookDataService.postBook(f.value)
      .subscribe(res => this.book = res);
      console.log(this.book);
  }
}

interface Courses {  
  title: string;
  description: string;
}
