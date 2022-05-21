import { Router } from 'express';
import CommentController from '../controllers/CommentController';

const router: Router = Router();

router.put('/', CommentController.updateComment);

export default router;
