//router index file
import { Router } from 'express';
import TeamRouter from './TeamRouter';
import CommentRouter from './CommentRouter';

const router = Router();

router.use('/comment', CommentRouter);
router.use('/team', TeamRouter);

export default router;
