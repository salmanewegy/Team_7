const username = document.getElementById('userName').value;
const password = document.getElementById('passWord').value;
const email = document.getElementById('Email').value;
const fName = document.getElementById('firstName').value;
const lName = document.getElementById('lastName').value;
const add = document.getElementById('address').value;
const phno = document.getElementById('phno').value;


fetch('/userRegister', {
  method: 'POST',
  body: JSON.stringify({
    username: username,
    password: password,
    email: email,
    fName: fName,
    lName: lName,
    add: add,
    phno: phno
  }),
  headers: { 'Content-Type': 'application/json' }
})
  .then((res) => res.text())
  .then((data) => console.log(data));
