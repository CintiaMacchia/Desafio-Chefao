require('dotenv').config()
const { expressjwt } = require("express-jwt")
const secret = require('../../config/secret')

module.exports = expressjwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"],
});