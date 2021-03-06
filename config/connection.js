const mysql = require('mysql2');
require('dotenv').config();

// Connects to Database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
},
    console.log("Connected to employee_tracker database")
);

module.exports = db;