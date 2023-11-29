/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Article, { IArticle } from '../models/Article';

export class ArticleController {
    public async getArticles(req: Request, res: Response): Promise<void> {
        try {
            const articles: IArticle[] = await Article.find({});
            res.status(200).json({
                status: 'success',
                results: articles.length,
                data: {
                    data: articles,
                },
            });
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
            res.status(200).json({
                status: 'success',
                data: {
                    data: article,
                },
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    public async createArticle(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body as Pick<IArticle, 'title' | 'content'>;

            const newArticle: IArticle = await Article.create(body);

            res.status(201).json({
                status: 'success',
                data: {
                    new: newArticle,
                },
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error);
            res.status(500).send(error.message);
        }
    }

    public async updateArticle(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body as Pick<IArticle, 'title' | 'content'>;
            const updatedArticle = await Article.findByIdAndUpdate(
                req.params.id,
                body
            );

            res.status(200).json({
                status: 'success',
                data: {
                    data: updatedArticle,
                },
            });
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    public async deleteArticle(req: Request, res: Response): Promise<void> {
        try {
            await Article.findByIdAndDelete(req.params.id);

            res.status(200).json({
                status: 'success',
                data: null,
            });
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}
