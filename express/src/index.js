import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './router/user.js';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello world')
})
app.use("/user", userRouter)
app.use(express.json()); //body parser(json)

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: true,
    credentials: true
}));
app.listen(PORT, () => {
    console.log(`Start ithaca Server PORT:${PORT}`)
})