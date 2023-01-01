const bookListDiv = document.getElementById('book-list');

fetch('/books')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((book) => {
      // Create HTML elements to display book information
      const title = document.createElement('h2');
      title.textContent = book.title;
      const author = document.createElement('p');
      author.textContent = `by ${book.author}`;
      const price = document.createElement('p');
      price.textContent = `${book.price} USD`;

      bookListDiv.appendChild(title);
      bookListDiv.appendChild(author);
      bookListDiv.appendChild(price);
    });
  });
