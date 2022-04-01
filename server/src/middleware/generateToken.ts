import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
import {User} from '../entity/User'



export async function generateToken(userInfo:User) {

    
    return jwt.sign({userInfo},'123',{ expiresIn: '2d' },) 
}

