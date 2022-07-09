"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_jwt_1 = require("express-jwt");
exports.default = (0, express_jwt_1.expressjwt)({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"],
});
