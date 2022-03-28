import { Request, Response } from "express";
import {  getRepository } from "typeorm";
import { User } from '../entity/User';


const Login = async (req: Request, res: Response) => {
    const userinfo = await getRepository(User)
        .createQueryBuilder('u')
        .select('u.id', 'u.email')
        .leftJoin('u.contents', 'c',)
        .where('u.id=:id', { id: 1 })
        .getMany()
    res.status(200).json({ data: userinfo, message: 'ok' })
}

export default Login