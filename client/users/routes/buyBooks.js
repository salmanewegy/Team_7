const buyButton = document.getElementById('buy-button');

buyButton.addEventListener('click', () => {
  let totalCost = 0;

  for (let i = 1; i <= 3; i++) {
    const bookRow = document.getElementById(`book-${i}`);
    const priceCell = bookRow.querySelector('td:nth-child(4)');
    const price = parseFloat(priceCell.textContent.substring(1)); 
    const quantityInput = document.getElementById(`quantity-${i}`);
    const quantity = parseInt(quantityInput.value);
    totalCost += price * quantity;
  }

});
