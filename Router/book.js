const express = require('express');

const router = express.Router();

const db = require('../db');


router.post("/addbooks", (req, res)=>{
    console.log(req.body);
    const q = "INSERT INTO books (`book_name`, `book_price`, `image`) VALUES(?)";
    const values = [
        req.body.book_name,
        req.body.book_price,
        req.body.image
    ];
    db.query(q, [values], (err, data)=>{
        if(err){
            res.send(err);
            
        }else{
            res.send(data);
        }
    })
})

router.get('/getbooks', async(req, res) => {
    try{
        const response = await db.promise().query('SELECT * FROM books');
        res.status(200).json(response[0]);
    }
    catch(err){
        res.status(422).json(err);
    }
})

router.get("/search/:key", async (req, res) => {
    try {
        const key = req.params.key;
        const response = await db.promise().query(`SELECT * FROM books WHERE book_name = '${key}'`);
        res.status(200).json(response[0]);
    } catch (err) {
        res.status(422).json(err);
    }
});

router.get("/getbook/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await db
            .promise()
            .query(`SELECT * FROM books WHERE book_id = '${id}'`);
        res.status(201).json(response[0]);
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = router;
