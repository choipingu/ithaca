import { Request, Response } from "express";
import {  getRepository } from "typeorm";
import { User } from '../entity/User';


const SignUp = async (req: Request, res: Response) => {
    const { email, nickname, password } = req.body
    const userRepo = getRepository(User)
    const user = new User()
    user.email = email
    user.nickname = nickname
    user.password = password
    await userRepo.save(user)
    res.status(201).json({ message: 'ok' })
}

export default SignUp