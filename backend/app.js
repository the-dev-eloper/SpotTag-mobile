
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const api = process.env.API_URL;

const languageRouter = require('./routers/languageRouter');

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.use(`${api}/languages`, languageRouter)

app.get('/', (req, res) => {
    res.send('Server is running');
});

mongoose.connect('mongodb://localhost/spottag-mobile')
    .then(() => {
        console.log('Database connection is ready..');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen('3000', () => {
    console.log("Server is running at http://localhost:3000/");
});