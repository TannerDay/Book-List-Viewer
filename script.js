
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "photos/Gatsby.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "photos/1984.jpg"
    },
    {
        title: "Coding for dummies",
        author: "Nikhil Abraham",
        image: "photos/coding.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "photos/Mockingbird.jpg"
    },
    {
        title: "Poor Dad Rich Dad",
        author: "Robert Kiyosaki",
        image: "photos/Poor-Dad.jpg"
    }
];

function fetchBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books);
        }, 1000); 
    });
}

function displayBooks(bookArray) {
    const bookListDiv = document.getElementById('bookList');

    bookArray.forEach(book => {
        const bookDiv = document.createElement('div');
        const titleElem = document.createElement('h2');
        const authorElem = document.createElement('p');
        const imageElem = document.createElement('img');
      
        titleElem.textContent = book.title;
        authorElem.textContent = `Author: ${book.author}`;
        imageElem.src = book.image;
        imageElem.alt = book.title;
        imageElem.style.width = '150px';

        bookDiv.appendChild(titleElem);
        bookDiv.appendChild(authorElem);
        bookDiv.appendChild(imageElem);
        bookListDiv.appendChild(bookDiv);
    });
}

fetchBooks().then(displayBooks);