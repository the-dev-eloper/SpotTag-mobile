const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const languageSchema = mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String },
        developer: { type: String },
        stableRelease: { type: String },
        firstAppeared: { type: String },
        bugList: { type: Array },
        dateCreated: { type: Date, default: Date.now()}
    });

exports.Language = mongoose.model('Language', languageSchema);
