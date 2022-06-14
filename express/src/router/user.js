import express from 'express';
import { login, getUser } from '../controller/user'
const router = express.Router()

router.post('/login', login)
router.get('/getuser', getUser)
router.get('/logout', logout)