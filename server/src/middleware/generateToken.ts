import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
import {User} from '../entity/User'


export async function generateToken(userInfo:User) {
    
    
    // return jwt.sign({userInfo},process.env.ACCESS_SECRET,{ expiresIn: '2d' },) 
}

