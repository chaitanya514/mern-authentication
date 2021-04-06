const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const Note = require("../models/note");
const User = require("../models/user");


const saveNote = (note,res) =>{
    note
        .save()
        .then(note=>res.json(note))
        .catch(()=>res.status(500).json({error: "could not save the note"}))
}


router.get("/",(req,res)=>{
    Note.find({author:req.username.username})
    .then(notes=>{
        res.json(notes)
    }).catch(()=>res.json({error:"could not find user with that username"}))
})

router.post("/",(req,res)=>{
    const {title,body,videoLink, videoTimeStamp} = req.body;

    
})