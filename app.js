const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
require('./db');
const port = 8003;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json("server start")
})
const users = require('./Router/User');
app.use(users);
const book = require('./Router/book');
app.use(book);
const order = require('./Router/order');
app.use(order);

app.listen(port, () => {
console.log(`server is start port number ${port}`);
});
