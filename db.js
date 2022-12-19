const mysql = require('mysql2') 
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '123456',
    database:'bookstore'
});

conn.connect(function(error){
    if(error) 
    {
        throw error;
    }
    else{
    console.log("connected");
    }
})
module.exports=conn;