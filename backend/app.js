
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;

const languageSchema = mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        developer: { type: String, required: true },
        stableRelease: { type: String, required: true },
        firstAppeared: { type: String, required: true },
        bugList: { type: Array, required: false },
    },
    {
        timestamps: true,
    }
);

const Language = mongoose.model('Language', languageSchema);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get(`${api}/languages`, async (req, res) => {

    const languageList = await Language.find({});
    res.send(languageList);
});

app.post(`${api}/languages`, async (req, res) => {

    const language = new Language({
        name: req.body.name,
        image: req.body.image,
        developer: req.body.developer,
        stableRelease: req.body.stableRelease,
        firstAppeared: req.body.firstAppeared,
        bugList: req.body.bugList
    });

    const createdLanguage = await language.save();

    if(createdLanguage) {
        res.status(201).json(createdLanguage)
    } else {
        res.status(500).json({
            error: err,
            success: false
        })
    }
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