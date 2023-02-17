import { Request, Response, NextFunction } from 'express';

import Simulation from '../services/simulation';

const simulation = new Simulation();

const scores = (_req: Request, res: Response, _next: NextFunction) => {
  const data = simulation.getState()
  res.status(201).json({ status: 'success', data });
};

const start = (_req: Request, res: Response, _next: NextFunction) => {
  simulation.startSimulation()
  res.status(201).json({ status: 'success' });
};

const finish = (_req: Request, res: Response, _next: NextFunction) => {
  simulation.finishSimulation()
  res.status(201).json({ status: 'success' });
};

const restart = (_req: Request, res: Response, _next: NextFunction) => {
  simulation.restartSimulation()
  res.status(201).json({ status: 'success' });
};

export default {
  scores,
  start,
  finish,
  restart,
};
