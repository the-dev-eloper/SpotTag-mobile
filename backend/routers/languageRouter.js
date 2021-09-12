
const express = require('express');
const { Language } = require("../models/languageModel");

const languageRouter = express.Router();

languageRouter.get(`/`, async (req, res) => {

    const languageList = await Language.find({});
    res.send(languageList);
});

languageRouter.post(`/`, async (req, res) => {

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

module.exports = languageRouter;
