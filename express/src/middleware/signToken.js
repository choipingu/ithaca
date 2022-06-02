import * as jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'

dotenv.config()

export async function signToken(userInfo) {
    return jwt.sign({ userInfo }, process.env.ACCESS_SECRET, { expiresIn: '10m' })
}