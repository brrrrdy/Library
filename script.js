const myLibrary = [];

// Book constructor
function Book(title, author, year, pages, read, publisher) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
  this.publisher = publisher;
  this.id = crypto.randomUUID();
  this.info = function () {
    return `${this.title} by ${this.author} contains ${this.pages} pages, and was published in ${this.year} by ${this.publisher}.`;
  };
}

// Read status

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Add a new book to the library

function addBookToLibrary(title, author, year, pages, read, publisher) {
  const newBook = new Book(title, author, year, pages, read, publisher);
  myLibrary.push(newBook);
  renderLibrary();
}

// Render the library

function renderLibrary() {
  const leftContainer = document.querySelector(".left-container");
  leftContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = book.id;

    bookCard.innerHTML = `
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
      <p class="book-meta">Published: ${book.year} • Pages: ${book.pages}</p>
      <p class="book-publisher">Publisher: ${book.publisher}</p>
      <p class="book-status">
        Status: <span class="status-read">${
          book.read ? "Read" : "Unread"
        }</span>
      </p>
      <div class="card-buttons">
        <button class="toggle-read-btn">Toggle Read</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    // Toggle read status

    bookCard.querySelector(".toggle-read-btn").addEventListener("click", () => {
      book.toggleRead();
      renderLibrary();
    });

    // Remove book

    bookCard.querySelector(".remove-btn").addEventListener("click", () => {
      const index = myLibrary.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        myLibrary.splice(index, 1);
        renderLibrary();
      }
    });

    leftContainer.appendChild(bookCard);
  });
}

// Form logic to add new books

document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const publisher = document.getElementById("publisher").value;

  addBookToLibrary(title, author, year, pages, read, publisher);
  document.getElementById("book-form").reset();
});
