import { book } from "./js/book.js";
import { library } from "./js/library.js";

const lib = new library();

const dune = new book("Dune", "Frank Herbert", 1965);
const lotr = new book("Lord of the rings", "J.R.R. Tolkien", 1954)


//Måste man alltid "add book" om man har flera böcker? 
// Kan man skapa böcker genom html input?
lib.addBook(dune);
lib.addBook(lotr);

console.log(lib.listBooks());

    const display = document.querySelector('.card');
    const booksHTML = lib.listBooks()
    .map(bookInfo => `<p>${bookInfo}</p>`)
    .join('');

    display.innerHTML = booksHTML;
