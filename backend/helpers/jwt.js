const expressJwt = require('express-jwt');
require('dotenv/config');

function authJWT() {

    const secret = process.env.secret;

    return expressJwt({
        secret,
        algorithms: ['HS256']
    })
}

module.exports = authJWT;