const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

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

exports.Language = mongoose.model('Language', languageSchema);
