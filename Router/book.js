const express = require('express');

const router = express.Router();

const db = require('../db');

router.post('/addbooks', async(req, res) => {
    try {
        const response = await db.promise().query(`INSERT INTO books (book_id, book_name, book_price, image)
          VALUES ('${req.body.book_id}','${req.body.book_name}',' ${req.body.book_price}','${req.body.image})`);
        
        res.status(201).json({ massage: 'success' });
    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/getbooks', async(req, res) => {
    try{
        const response = await db.promise().query('SELECT * FROM books');
        res.status(200).json(response[0]);
    }
    catch(err){
        res.status(400).json(err);
    }
})

router.get("/searchbook/:book_name", async (req, res) => {
    try {
        const book_name = req.params.book_name;
        const response = await db.promise().query(`SELECT * FROM book WHERE book_name = '${book_name}'`);
        res.status(200).json(response[0]);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;