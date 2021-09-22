const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    
    },
    image: {
        type: String
    },
    images: [{
        type: String
    }],
    developer: {
        type: String,
        default: ''
    },
    stableRelease: {
        type: String,
        default: ''
    },
    firstAppeared: {
        type: String,
        default: ''
    },
    bugList: {
        type: Array
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

languageSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

languageSchema.set('toJSON', {
    virtuals: true
});

exports.Language = mongoose.model('Language', languageSchema);
