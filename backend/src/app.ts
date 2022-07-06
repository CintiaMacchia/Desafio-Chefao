import express from 'express'
import db from './shared/infrastructure/database'
import handleMiddleware from './shared/middlewares/hendleMiddleware'
import routes from './shared/routes/index'
const upload = require('./shared/infrastructure/config')

const app = express();

db.hasConection()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(upload.any());
//app.usea(express.static('./src/public'))

app.use(routes);
app.use(handleMiddleware)

export default app