import express from 'express';
import { regist } from '../controller/book.js'
const router = express.Router()

router.post('/regist', regist)
