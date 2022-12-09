const express = require('express');

const router = express.Router();

const db = require('../db');

router.post('/addbooks', async(req, res) => {
    try {
        const response = await db.promise().query(`INSERT INTO order (order_id, book_name, book_price, mobileno)
          VALUES ('${req.body.order_id}','${req.body.book_name}',' ${req.body.book_price}','${mobileno})`);
        
        res.status(201).json({ massage: 'success' });
    } catch(err) {
        res.status(400).json(err);
    }
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