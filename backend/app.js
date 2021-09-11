
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get(`${api}/languages`, (req, res) => {

    const languages = {
        _id: '1',
        name: 'JavaScript',
        image: 'Sample Image', 
    }
    res.send(languages);
});

app.post(`${api}/languages`, (req, res) => {
    const newLanguage = req.body
    console.log(newLanguage);
    res.send(newLanguage);
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