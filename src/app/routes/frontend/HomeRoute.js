import { Router } from 'express'

const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    res.send('Welcome to Home Router!')
})

export default homeRouter