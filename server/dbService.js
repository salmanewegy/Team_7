//This file is to connect to our DB and will be a service to write queries and get data from DB-----

const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});

class DbService {
    static getDbServiceInstance(){
        return instance ? instance: new DbService();
    }
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM users;"

                connection.query(query, (err, results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


//---------------------------------
    async userLogin(username, password) {
        try {
            const loginId = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM users WHERE username = ? AND password = ? AND user_type = 1";

                connection.query(query, [username, password] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.loginId);
                })
            });
            console.log(loginId);
            return loginId;
        } catch (error) {
            console.log(error);
        }
    }
}




module.exports = DbService;
