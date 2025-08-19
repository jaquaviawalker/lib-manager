import './style.css';

class Book {
  title: string;
  author: string;
  publishedYear: number;
  private isbn: number;

  private static bookCount: number;

  constructor(title: string, author: string, year: number, isbn: number) {
    this.title = title;
    this.author = author;
    this.publishedYear = year;
    this.isbn = isbn;
    Book.bookCount++;
  }
}

// 2.	Member Class
// •	Properties: name, memberId
// •	static totalMembers → track how many members are registered
// •	Method:
// •	borrowBook(book: Book) → prints a message like Alice borrowed "The Hobbit"

class Member {
  name: string;
  private memberId: number;

  private static totalMembers: number;

  constructor(name: string, memberId: number) {
    this.name = name;
    this.memberId = memberId;
    Member.totalMembers++;
  }

  borrowBook(book: Book): void {
    console.log(`${this.name} borrowed ${book.title}`);
  }
}
