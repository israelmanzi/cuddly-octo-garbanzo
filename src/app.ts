import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import articleRouter from './routes/article.router';

const app: Application = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Cuddly-Octo-Garbanzo API' });
}).use('/api/v1/articles', articleRouter);

export default app;
