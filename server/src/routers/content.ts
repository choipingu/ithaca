import express from 'express';
import Posting from '../controllers/posting';


const Router = express.Router()

Router.post('/posting',Posting)

export default Router