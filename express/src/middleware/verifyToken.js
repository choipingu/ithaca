import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config()

export async function verifyToken(req, res) {
    const JWT = req.cookies.accessToken
    const data = jwt.verify(JWT, process.env.ACCESS_SECRET, (err, decoded) => {
        if (err) {
            return null;
        } else {
            return decoded;
        }
    }
    )

    return data;
}