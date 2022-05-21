import { Router } from 'express';
import CommentController from '../controllers/CommentController';

const router: Router = Router();

router.put('/', CommentController.updateComment);
router.get('/:inviteCode', CommentController.getComments);

export default router;
