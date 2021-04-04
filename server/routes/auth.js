const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const User = require('../models/user');

router.post("/", async (req, res) => {
    const { username, password } = req.body;

    if (password.length < 6) {
        res.status(500).json({ message: "password must be greater than 6 character" });
        return;
    }

    let newUser = new User({
        username,
        passwordHash: bcrypt.hashSync(password, 10),
        numNotes: 0
    })

    newUser
        .save()
        .then(user => {
            jwt.sign({
                username: newUser.username
            }, 'secret', (err, token) => {
                if (err) throw err;
                res.send({
                    username: user.username
                })
            })
        }).catch(err => {
            console.log("Error caught", err)
            res.status(500).json({ msg: `User ${err.keyvalue['username']} already exists  ` })
        })

})

router.post("/login",(req,res)=>{
    const {username,pass}

})