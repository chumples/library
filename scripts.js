let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.addBookToLibrary()
    // myLibrary.push(this)
    // this.addBookToLibrary()
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this)
}

function displayBooks(Book) {

}

const newBook = document.getElementById('new');
newBook.onclick = function() {
    alert('Hi!')
}

const Tao = new Book('Tao Te Ching', 'Laozi', 88, true);
const Gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
const Catcher = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, true);