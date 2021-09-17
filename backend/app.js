
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJWT = require('./helpers/jwt');
const errorHandler = require('./helpers/errorHandler');

const app = express();
const api = process.env.API_URL;

app.use(cors());
app.options('*', cors());

// Middleware
app.use(express.json());
app.use(morgan('tiny'));
// app.use(authJWT());
app.use(errorHandler);

// Routes
const languageRouter = require('./routers/languageRouter');
const userRouter = require('./routers/userRouter');

app.use(`${api}/languages`, languageRouter);
app.use(`${api}/users`, userRouter);

//Database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'spottag-mobile'
})
    .then(() => {
        console.log('Database connection is ready..');
    })
    .catch((err) => {
        console.log(err);
    })

// Server
app.listen('3000', () => {
    console.log("Server is running at http://localhost:3000/");
});
