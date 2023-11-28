import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Cuddly-Octo-Garbanzo API' });
});

export default app;
