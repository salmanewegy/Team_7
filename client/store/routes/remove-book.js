const form = document.getElementById('remove-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = form.elements.id.value;

  fetch(`/remove-book/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        responseDiv.innerHTML = 'Book removed successfully';
      } else {
        responseDiv.innerHTML = 'Error removing book';
      }
    });
});
