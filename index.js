import 'dotenv/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import express from 'express'
import cors from 'cors'
import { config } from './src/app/config/index.js'
import homeRouter from './src/app/routes/frontend/HomeRoute.js'
import authRouter from './src/app/routes/frontend/AuthRoute.js'

// initialize app
const app = express()

// solving __dirname or __filename problem in ES6 styling code
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// set folder to src/templates
app.set('views', path.join(__dirname, 'src/templates'))
// set view engine to ejs
app.set('view engine', 'ejs')
// set static folder
app.use('/assets', express.static(path.join(__dirname, 'src/public')))
// handling cors
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