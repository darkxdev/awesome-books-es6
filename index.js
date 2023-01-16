import BookCollection from './modules/bookCollection.js';
import { DateTime } from './modules/luxon.js';

const bookCollection = new BookCollection();
bookCollection.displayBooks();

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  bookCollection.addBook(title, author);
  bookCollection.displayBooks();
});

// Nav bar buttons Setup

const btnListSection = document.getElementById('btn_listSection');
const btnAddSection = document.getElementById('btn_addSection');
const btnContactSection = document.getElementById('btn_contactSection');

const listSection = document.getElementById('list_section');
const addSection = document.getElementById('add_section');
const contactSection = document.getElementById('contact_section');

// List section button actions

btnAddSection.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
});

// Add section button actions

btnListSection.addEventListener('click', () => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Contact section button actions

btnContactSection.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'block';
});

// Date & Time Display

const localTime = DateTime.local();
const timeNow = localTime.toFormat('MMMM dd yyyy, hh:mm:ss a');

const dateText = document.getElementById('date');
dateText.textContent = timeNow;