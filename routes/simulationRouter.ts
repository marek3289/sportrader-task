import { Router } from 'express';

import { simulationController } from '../controllers';

const router = Router();

router.get('/scores', simulationController.scores);

router.post('/start', simulationController.start);
router.post('/stop', simulationController.stop);
router.post('/restart', simulationController.restart);

export default router;
