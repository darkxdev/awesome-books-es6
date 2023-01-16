import Book from './book.js';

class BookCollection {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('bookCollection')) || [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.collection.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }

  removeBook(title) {
    this.collection = this.collection.filter((book) => book.title !== title);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }

  displayBooks() {
    const listContainer = document.getElementById('book-list');
    listContainer.innerHTML = '';

    const list = document.createElement('ul');

    this.collection.forEach((book) => {
      const item = document.createElement('li');
      item.innerHTML = `${book.title} by ${book.author}`;
      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.title);
        this.displayBooks();
      });
      item.appendChild(removeButton);
      list.appendChild(item);
    });
    listContainer.appendChild(list);
  }
}

export default BookCollection;