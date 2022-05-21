import { Router } from 'express';
import { body } from 'express-validator';
import { TeamController } from '../controllers';

const router: Router = Router();

router.post('/', [body('name').notEmpty()], TeamController.createTeam);
router.get('/:inviteCode', TeamController.isExistTeam);

export default router;
