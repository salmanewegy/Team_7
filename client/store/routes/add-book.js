const form = document.getElementById('add-book-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const bookCode = form.elements.bookCode.value;
  const bookName = form.elements.bookName.value;
  const author = form.elements.author.value;
  const price = form.elements.price.value;
  const bookQuantity = form.elements.bookQuantity.value;

  const data = {
    bookName: bookName,
    bookCode: bookCode,
    author: author,
    price: price, 
    bookQuantity: bookQuantity
  };
});
