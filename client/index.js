const express = require('express');
const app = express();

app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/viewbook', (req, res) => {
  res.sendFile(__dirname + '/viewbook.html'); 
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html'); 
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html'); 
});

