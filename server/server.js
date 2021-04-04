const express = require('express');
const mongoose = require('mongoose');
const app = express();


const note = require("./models/note");

app.use(express.json());


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



app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`))
