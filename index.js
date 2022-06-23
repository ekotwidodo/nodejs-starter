import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { config } from './src/app/config/index.js'
import homeRouter from './src/app/routes/frontend/HomeRoute.js'
import authRouter from './src/app/routes/frontend/AuthRoute.js'

const app = express()

app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// routes
app.use('/', homeRouter)
app.use('/auth', authRouter)

app.listen(config.PORT, () => {
    console.log(`Server listen to PORT=${config.PORT}`)
})