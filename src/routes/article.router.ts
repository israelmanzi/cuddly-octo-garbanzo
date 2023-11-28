import { Router } from 'express';
import { ArticleController } from '../controllers/article.controller';

const router: Router = Router();
const articleController: ArticleController = new ArticleController();

//use the uuid id as the default id for the article
router
    .get('/', articleController.getArticles)
    .get('/:id', articleController.getArticle)
    .post('/', articleController.createArticle);

export default router;
