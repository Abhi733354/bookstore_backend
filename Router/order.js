const express = require('express');

const router = express.Router();

const db = require('../db');

router.post("/palceorder", (req, res)=>{
    console.log(req.body);
    const q = "INSERT INTO users (`book_name`, `book_price`) VALUES(?)";
    const values = [
        req.body.book_name,
        req.body.book_price,
    ];
    db.query(q, [values], (err, data)=>{
        if(err){
            res.send(err);
            
        }else{
            res.send(data);
        }
    })
})

router.get('/getorders', async(req, res) => {
    try{
        const response = await db.promise().query('SELECT * FROM order');
        res.status(200).json(response[0]);
    }
    catch(err){
        res.status(400).json(err);
    }
})

module.exports = router;