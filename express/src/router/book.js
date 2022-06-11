import express from 'express';
import { regist } from '../controller/book'
const router = express.Router()

router.post('/regist', regist)
