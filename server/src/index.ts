import express, { Request, Response } from 'express';
import "reflect-metadata";
import {createConnection ,getRepository} from "typeorm";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { User } from './entity/User';

const app = express();
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
app.post('/signup',(req: Request, res: Response)=>{
  const user=new User()
  const {email,nickname,password}=req.body
  const userRepo = getRepository(User)
  console.log(req.body)
  user.email=email
  user.nickname=nickname
  user.password=password
  try{
    userRepo.save(user)
    res.status(201).json({message:'ok'})
  } catch (err){
    console.log(err)
  }
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


