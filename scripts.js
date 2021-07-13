let myLibrary = [];
let myLibraryLength = myLibrary.length;
for (let i = 0; i < myLibraryLength.length; i++) {
    console.log(myLibrary[i])
}

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
// newBook.onclick = function() {
//     alert('Hi!')
// }
newBook.addEventListener('click', function() {

});

const Tao = new Book('Tao Te Ching', 'Laozi', 88, true);
const Gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
const Catcher = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, true);

// const tag = document.createElement('p')
// // tag.appendChild(Tao);
// const text = document.createTextNode('TEST');
// tag.appendChild(text);
// // tag.appendChild(myLibrary[0]);
// const element = document.getElementById('bookList');
// element.appendChild(tag);

// const list = document.getElementById('bookList');
// const cellTag = list.appendChild(document.createElement('td'));
// cellTag.id = 'level1';

// for (var i = 0; i < myLibrary.length; i++) {
//     cellTag.appendChild(document.createTextNode(myLibrary[i]));
//     cellTag.appendChild(document.createElement('br'));
// }

document.getElementById('bookList').innerHTML = myLibrary.values(Book);



function newButton() {
    document.getElementById('myForm').style.display = 'block';
}

function openForm() {
    document.getElementById('myForm').style.display = 'block';
  }
  
  function closeForm() {
    document.getElementById('myForm').style.display = 'none';
  }
