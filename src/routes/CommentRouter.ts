import { Router } from 'express';
import CommentController from '../controllers/CommentController';
import { body } from 'express-validator/check';

const router: Router = Router();

router.put(
    '/',
    [body('inviteCode').notEmpty(), body('comment').notEmpty()],
    CommentController.updateComment
);

export default router;
