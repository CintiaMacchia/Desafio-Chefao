import express from 'express'
import db from './shared/infrastructure/database'
import handleMiddleware from './shared/middlewares/hendleMiddleware'
import routes from './shared/routes/index'

const app = express();

db.hasConection()

app.use(express.json());
app.use(routes)
app.use(handleMiddleware)

export default app