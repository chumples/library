let myLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.addBookToLibrary()
    // myLibrary.push(this)
    // this.addBookToLibrary()
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this)
}



function displayBooks() {

}

const Tao = new Book('Tao Te Ching', 'Laozi', 88);
const Gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const Catcher = new Book('The Catcher in the Rye', 'J.D. Salinger', 277);