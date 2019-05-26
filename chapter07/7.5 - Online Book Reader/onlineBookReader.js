class Bookreader {
    constructor() {
        this.currentBook = null;
        this.books = {};
    }

    add(book) {
        this.books[book.name] = book;
    }

    find(bookname) {
        return this.books[bookname];
    }

    open(bookname) {
        this.currentBook = this.books[bookname];
        return this.currentBook.file;
    }
}

class Book {
    constructor(name, file) {
        this.name = name;
        this.file = file;
    }
}