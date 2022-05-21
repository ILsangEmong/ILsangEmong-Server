//router index file
import { Router } from 'express';
import TeamRouter from './TeamRouter';

const router = Router();

router.use('/team', TeamRouter);

export default router;
