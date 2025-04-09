const myLibrary = [];

// the constructor

function Book(title, author, year, pages, read, publisher) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
  this.publisher = publisher;
  this.id = crypto.randomUUID();
  this.info = function () {
    let result = `${this.title} by ${this.author} contains ${this.pages} pages, and was published in ${this.year} by ${this.publisher}.`;
    return result;
  };
}

// take params, create a book then store it in the array

function addBookToLibrary(title, author, year, pages, read, publisher) {
  const newBook = new Book(title, author, year, pages, read, publisher);
  myLibrary.push(newBook);
}

// function that loops through the array and displays each book on the page.

function renderLibrary() {}
