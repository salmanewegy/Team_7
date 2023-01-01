const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
//const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cookieParser());

const dbService = require('./dbService');
const { response } = require('express');

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//--------------------Login----------------
app.get('/login', (req, res) => {
    // Render the login form
    res.render('login');
  });

app.get('/adminLogin', (req, res) => {
    // Render the login form
    res.render('adminLogin');
});
  

app.post('/adminLogin', (req, res) => {
    const { username, password } = req.body;
    const db = dbService.getDbServiceInstance();
    const result = db.login(username, password);
      result
      .then(data => res.render('amdinLogin'))
      .catch(err => console.log(err));
  });

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = dbService.getDbServiceInstance();
    const result = db.login(username, password);
      result
      .then(data => res.render('login'))
      .catch(err => console.log(err));
});
  
//--------------------Read-------------------


app.listen(process.env.PORT, () => console.log('app is runnning'));