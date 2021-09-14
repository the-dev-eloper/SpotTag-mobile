
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
const api = process.env.API_URL;

app.use(cors());
app.options('*', cors());

const languageRouter = require('./routers/languageRouter');
const userRouter = require('./routers/userRouter');

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.use(`${api}/languages`, languageRouter);
app.use(`${api}/users`, userRouter);

app.get('/', (req, res) => {
    res.send('Server is running');
});

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Database connection is ready..');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen('3000', () => {
    console.log("Server is running at http://localhost:3000/");
});
