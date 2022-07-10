import express from 'express'
import db from './shared/infrastructure/database'
import handleMiddleware from './shared/middlewares/hendleMiddleware'
import routes from './shared/routes/index'
import upload from './shared/infrastructure/config/upload'

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(upload.any());
app.use(express.static('./src/public'));
db.hasConection();
app.use(routes);
app.use(handleMiddleware)

export default app