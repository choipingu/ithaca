import { Request, Response } from "express";
import { createQueryBuilder, getRepository, getConnection, MetadataAlreadyExistsError } from "typeorm";
import { User } from '../entity/User';


const GetUser = async (req: Request, res: Response) => {
    const userinfo1 = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id: 1 })
        .getOne();
    res.status(200).json({ data: userinfo1, message: 'ok' })
    
}

export default GetUser