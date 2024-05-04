const express = require('express');
const app = express();
const database = require("./config/database")

database.connect();

const PORT = 4000;

app.listen(PORT,() => {
    console.log(`Listen at Port ${PORT}`);
})

app.get('/',(req,res) => {
    res.send('Welcome back to my youtube channel')
})