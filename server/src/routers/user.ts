import express from 'express';
import SignUp from '../controllers/signup';


const Router = express.Router()

Router.post('/signup',SignUp)