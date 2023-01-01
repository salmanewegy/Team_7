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
    const result = db.userLogin(username, password);
      result
      .then(data => res.render('login'))
      .catch(err => console.log(err));
});
  
//--------------------Register-------------------

app.get("/userRegister", (req, res) => {
    res.render("users/userRegister", {
        pageTitle: "Registration"
    });
  });
app.post('/userRegister', (req, res) =>{
    const uName = req.body[UsersDBConstants.COLUMN_USERNAME];
    const pWord = req.body[UsersDBConstants.COLUMN_PASSWORD];
    const fName = req.body[UsersDBConstants.COLUMN_FIRSTNAME];
    const lName = req.body[UsersDBConstants.COLUMN_LASTNAME];
    const addr = req.body[UsersDBConstants.COLUMN_ADDRESS];
    const phNo = req.body[UsersDBConstants.COLUMN_PHONE];
    const mailId = req.body[UsersDBConstants.COLUMN_MAILID];
  
    const db = dbService.getDbServiceInstance();
    const result = db.userRegister(uName, pWord, fName, lName, addr, phNo, mailId);
      result
      .then(res.render('userRegister'))
      .catch(err => console.log(err));
   
});

//------------------------Books--------------------

app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (err, rows) => {
      if (err) {
        console.error('Error querying database:', err);
        res.sendStatus(500); // Internal Server Error
        return;
      }
      res.json(rows); // Return list of books as JSON
    });
  });
  
//----------------------Buy Book------------------
app.post('/buy', (req, res) => {
    const totalCost = req.body.totalCost;
    const success = true; // 
    res.json({ success: success });
  });

//-----------------------------

app.listen(process.env.PORT, () => console.log('app is runnning'));