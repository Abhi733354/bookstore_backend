const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env"});
const port = 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);
const books = require('./routes/book');
app.use('/book', books);
const order = require('./routes/order');
app.use('/order', order);

app.listen(port, () => {
console.log(`server is start port number ${port}`);
});
