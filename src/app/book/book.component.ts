import { Component, OnInit } from '@angular/core';
import { Book } from "../../books";
import { BOOKS } from "../../mock-books";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = BOOKS;

  selectedBook: Book;

   
  constructor() { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
