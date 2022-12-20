const express = require("express");
const app = express();
const cors = require("cors");
const port = 8003;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended:false
}));

app.get("/",(req,res)=>{
    res.json("server start")
})

const users = require('./Router/User');
app.use(users);
const books = require('./Router/book');
app.use(books);
const order = require('./Router/order');
app.use(order);

app.listen(port, () => {
console.log(`server is start port number ${port}`);
});
