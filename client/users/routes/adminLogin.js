
const addBtn = document.querySelector('btnlogin');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#userName');
    const name = nameInput.value;
	
	const passInput = document.querySelector('#userPassWord');
    const password = passInput.value;

    fetch('http://localhost:5000/login', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name}, { password: password})
    })
    .then(response => response.json())
    .then(
        res.redirect('.store/viewBooks.html'),
		pw.println("<div class=\"tab\">Admin login Successful</div>"),
        pw.println("<div class=\"tab\"><br/><a href=\".store/addBook.html\">ADD BOOKS</a><br/></div>"),
        pw.println("<div class=\"tab\"><br/><a href=\".store/removeBook.html\">REMOVE BOOKS</a><br/></div>"),
        );
}
