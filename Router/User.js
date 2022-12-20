const express = require('express');

const router = express.Router();

const db = require('../db');
router.post("/userregister", (req, res)=>{
    console.log(req.body);
    const q = "INSERT INTO users (`name`, `email`, `password`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(q, [values], (err, data)=>{
        if(err){
            res.send(err);
            
        }else{
            res.send(data);
        }
    })
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