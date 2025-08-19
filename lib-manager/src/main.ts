import './style.css';

class Book {
  title: string;
  author: string;
  publishedYear: number;
  private isbn: number;

  private static bookCount: number = 0;

  constructor(title: string, author: string, year: number, isbn: number) {
    this.title = title;
    this.author = author;
    this.publishedYear = year;
    this.isbn = isbn;
    Book.bookCount++;
  }
}

class Member {
  name: string;
  private memberId: number;

  private static totalMembers: number = 0;

  constructor(name: string, memberId: number) {
    this.name = name;
    this.memberId = memberId;
    Member.totalMembers++;
  }

  borrowBook(book: Book): void {
    console.log(`${this.name} borrowed ${book.title}`);
  }
}

class Library {
  private books: Book[] = [];
  private static libraryName = 'Downtown Library';

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public listBooks(): void {
    console.log(`list of books in ${Library.libraryName}`);
    this.books.forEach((book) =>
      console.log(`- ${book.title} by ${book.author}`)
    );
  }
}
