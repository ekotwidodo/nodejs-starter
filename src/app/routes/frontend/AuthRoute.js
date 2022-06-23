import { Router } from 'express'
import { authRegister, authLogin, authLogout, authResetPassword } from '../../controllers/frontend/AuthController.js'

const authRouter = Router()

authRouter.post('/register', authRegister)
authRouter.post('/login', authLogin)
authRouter.post('/logout', authLogout)
authRouter.post('/reset-password', authResetPassword)

export default authRouter