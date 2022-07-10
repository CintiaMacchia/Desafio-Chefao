const express = require('express')
const db = require ('./shared/infrastructure/database')
const handleMiddleware = require ('./shared/middlewares/hendleMiddleware')
const routes = require ('./shared/routes/index')
const upload = require ('./shared/infrastructure/config/upload')

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());
app.use(express.static('./src/public'));
db.hasConection();
app.use(routes);
app.use(handleMiddleware)

module.exports = app