const express = require('express');

const router = express.Router();

const db = require('../db');

router.post('/userregister', async(req, res) => {
    console.log(req.body);
    try {
        const response =  await db.promise().query(`INSERT INTO users(name, email, password)VALUES('${req.body.name}',' ${req.body.email}','${req.body.password})`);
        
    console.log(response);
        res.status(201).json({ massage: 'success' });
    } 
    catch(err) {
        res.status(400).json(err);
    }
})


router.post('/userlogin', async (req, res) =>{
    console.log(req.body);
    const tempEmail = req.body.email;
    const tempPassword = req.body.password;
    try{
        const response = await db.promise().query(`SELECT * FROM users WHERE email = '${tempEmail}' `);
        console.log(response[0][0]);
        const data = response[0];
        if(data.length !== 0) {
            console.log(data[0].password, typeof(data[0].password), tempPassword, typeof(tempPassword));
            if(data[0].password === tempPassword) {
                res.status(201).json({message:'Succesfully login'})
            }
            else {
              
                res.status(401).json({err: 'Invalid Password'});
            }
        }
        else {
            
            res.status(401).json({err: 'Invalid Username'});
        }
    }
    catch(err) {
        res.status(400).json({Error: err.message})
    }
})

module.exports = router;