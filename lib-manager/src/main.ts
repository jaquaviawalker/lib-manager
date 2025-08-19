import './style.css';

class Book {
  title: string;
  author: string;
  publishedYear: number;
  private isbn: number;

  private static bookCount: number;

  constructor(
    title: string,
    author: string,
    year: number,
    isbn: number,
    bookCount: number
  ) {
    this.title = title;
    this.author = author;
    this.publishedYear = year;
    this.isbn = isbn;
    Book.bookCount++;
  }
}
