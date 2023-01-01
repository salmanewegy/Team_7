
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
		res.cookie('userId', user.id, {
          maxAge: 24 * 60 * 60 * 1000 //1 day onlyyy
        }),
        res.redirect('.store/viewBooks.html'),
		pw.println("<div class=\"tab\">Login Successful</div>"),
        );
}
