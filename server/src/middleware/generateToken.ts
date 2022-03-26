import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import {User} from '../entity/User'

dotenv.config()

export async function generateToken(userInfo:User) {
    // delete userInfo.password
    
    // return jwt.sign({userInfo},process.env.ACCESS_SECRET,{ expiresIn: '2d' },) 
}

