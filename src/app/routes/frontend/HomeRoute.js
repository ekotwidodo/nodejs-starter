import { Router } from 'express'
import { homePage } from '../../controllers/frontend/HomeController.js'

const homeRouter = Router()

homeRouter.get('/', homePage)

export default homeRouter