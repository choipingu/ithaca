import express from 'express';
import { login, getUser, signup, logout } from '../controller/user.js'
const userRouter = express.Router()

userRouter.post('/login', login)
userRouter.get('/getuser', getUser)
userRouter.post('/signup', signup)
userRouter.get('/logout', logout)

export default userRouter