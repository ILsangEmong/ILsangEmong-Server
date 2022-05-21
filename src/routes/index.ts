//router index file
import { Router } from 'express';
import CommentRouter from './CommentRouter';

const router = Router();

router.use('/comment', CommentRouter);

export default router;
