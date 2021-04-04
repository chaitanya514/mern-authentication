const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const User = require('../models/user');

router.post("/", async (req, res) => {
    const { username, password } = req.body;

   if(password.length <6) {
       res.status(500).json({message:"password must be greater than 6 character"});
       return;
   }

   let newUser = new User({
    username,
    passwordHash: bcrypt.hashSync(password,10)
   })

    newUser
        .save()
        .then(user => {
            console.log("this is note console:", user)
            res.json(user);
            console.log("data with json",res.json(user))
        }).catch(err => {
            console.log("Error caught", err)
            res.send("Error", err)
        })
})