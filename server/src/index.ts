import express, { Request, Response } from 'express';
import "reflect-metadata";
import {createConnection ,Connection,createQueryBuilder,getRepository} from "typeorm";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { User } from './entity/User';
import morgan from 'morgan'
import { Content } from './entity/Content';

const app = express();
const port = 8080
const logger = morgan('dev');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger)
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('welcome!');
});


app.post('/content',async (req: Request, res: Response)=>{
  const {title,main,userId}=req.body
  const userRepo = getRepository(Content)
  const content=new Content()
  content.title=title
  content.main=main
  content.user=userId;
  await userRepo.save(content)
  res.status(201).json({message:'ok'})
})

app.get('/join',async(req:Request,res:Response)=>{
  const userinfo= await getRepository(User)
  .createQueryBuilder('u')
  .select('u.id','u.email')
  .leftJoin('u.contents','c',)
  .where('u.id=:id',{id:1})
  .getMany()


  console.log(userinfo)
  res.status(200).json({data:userinfo,message:'ok'})
})

app.use('/user')

app.get('/user',async (req:Request,res:Response)=>{
  const userinfo1= await getRepository(User)
  .createQueryBuilder("user")
  .where("user.id = :id", { id: 1 })
  .getOne();

  console.log(userinfo1)
  res.status(200).json({data:userinfo1,message:'ok'})
})

createConnection().then(async connection => {

    console.log("DB Connection Done");
    
    app.listen(port , () => {
      console.log(`
    ################################################
    �️  Server listening on port: ${port}
    ################################################
  `);
  });
}).catch(error => console.log(error));


