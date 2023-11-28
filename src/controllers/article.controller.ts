import { Request, Response } from 'express';
import Article, { IArticle } from '../models/Article';

export class ArticleController {
    public async getArticles(req: Request, res: Response): Promise<void> {
        try {
            const articles: IArticle[] = await Article.find({});
            res.status(200).json({ articles });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    public async getArticle(req: Request, res: Response): Promise<void> {
        try {
            const article: IArticle | null = await Article.findOne({
                id: req.params.id as string,
            });
            res.status(200).json({ article });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    public async createArticle(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body as Pick<IArticle, 'title' | 'content'>;
            const article: IArticle = new Article({
                title: body.title,
                content: body.content,
            });

            const newArticle: IArticle = await article.save();

            res.status(201).json({
                message: 'Article saved to database successfully!',
                article: newArticle,
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}
