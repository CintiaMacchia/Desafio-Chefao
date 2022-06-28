import express from 'express'
import db from './shared/infrastructure/database'

const app = express();
db.hasConection()

app.use(express.json());

export default app