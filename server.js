const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.set("view engine", "ejs"); 

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => console.log(`listening at localhost:${port}`))