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

  public static getBookCount(): number {
    return Book.bookCount;
  }
}

class Member {
  name: string;
  private memberId: number;

  static totalMembers: number = 0;

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
// TESTING
const book1 = new Book('Harry Potter', 'JK Rowling', 1994, 12334545);
const book2 = new Book('Beauty and the Best', 'Walt Disney', 1973, 48590382);
const book3 = new Book('Lion King', 'Walt Disney', 1994, 84299385);

const m = new Member('Jaquavia Walker', 1);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();
m.borrowBook(book1);

console.log('Total Books:', Book.getBookCount());
console.log('Total Members:', Member.totalMembers);

console.log(m.borrowBook(book2));
console.log(Book.getBookCount());
