import 'dotenv/config';
import express, { Request, Response } from 'express';
import "reflect-metadata";
import {createConnection } from "typeorm";
import cors from "cors";
import cookieParser from 'cookie-parser';
import morgan from 'morgan'
import UserRouter from './routers/user'
import ContentRouter from './routers/content'
import dotenv from "dotenv";
import path from "path";



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

app.use('/user',UserRouter)
app.use('/content',ContentRouter)


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


