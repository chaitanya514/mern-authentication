const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const note = require("./models/note");



const dbPath = "mongodb+srv://mern-notes:Chaitanya@6514@cluster0.nm9y6.mongodb.net/test";


const API_PORT = process.env.PORT || 8080;


mongoose.connect(dbPath, {
    dbName: 'chaitanya6514',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongoDB is connected")
}).catch(err => {
    console.log("Error", err)
})


app.post("/", (req, res) => {
    const { title, author, body } = req.body;
    console.log(req.body.title)
    const newNote = new note({
        title,
        author,
        body
    })

    newNote
        .save()

        .then(note => {
            console.log("this is note console", note)
            res.json(note);
        }).catch(err => {
            console.log("Error caught", err)
            res.send("Error", err)
        })
})
app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`))
