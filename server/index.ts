import express, { Request, Response } from 'express';

const app = express();
const port = 8080

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('welcome!');
});

app.listen(port , () => {
    console.log(`
  ################################################
  �️  Server listening on port: 8080
  ################################################
`);
});