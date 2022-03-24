import express from 'express';
import SignUp from '../controllers/signup';
import GetUser from '../controllers/getuser';
import Login from '../controllers/login';

const Router = express.Router()

Router.get('/getuser',GetUser)
Router.get('/login',Login)
Router.post('/signup',SignUp)

export default Router