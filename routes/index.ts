import { Router } from 'express';
import simulationRouter from './simulationRouter';

const router = Router();

router.use('/simulation', simulationRouter);

export default router;
