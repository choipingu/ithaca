import express from 'express';
import cors from 'cors';
const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT)