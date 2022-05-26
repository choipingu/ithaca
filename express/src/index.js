import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello world')
})
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