import { Request, Response } from "express";
import { createQueryBuilder, getRepository, getConnection, MetadataAlreadyExistsError } from "typeorm";
import { Content } from "../entity/Content";


const Posting = async (req: Request, res: Response) => {
    const { title, main, userId } = req.body
    const userRepo = getRepository(Content)
    const content = new Content()
    content.title = title
    content.main = main
    content.user = userId;
    await userRepo.save(content)
    res.status(201).json({ message: 'ok' })
}

export default Posting