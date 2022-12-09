const mysql = require('mysql');

module.exports = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'bookstore@123',
    database:'book_store'
});