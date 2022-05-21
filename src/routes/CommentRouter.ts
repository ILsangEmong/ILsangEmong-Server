import { Router } from 'express';
import CommentController from '../controllers/CommentController';
import { body } from 'express-validator';

const router: Router = Router();

router.put(
    '/',
    [body('inviteCode').notEmpty(), body('comment').notEmpty()],
    CommentController.updateComment
);
router.get('/:inviteCode', CommentController.getComments);

export default router;
