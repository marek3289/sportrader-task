import { Request, Response, NextFunction } from 'express';

// import InMemoryScoreboardStore from '../models/scoreboard';
// const scoreboard = new InMemoryScoreboardStore();
// const simulation = new InMemoryScoreboardStore();

const scores = (req: Request, res: Response, _next: NextFunction) => {};

const start = (req: Request, res: Response, _next: NextFunction) => {};

const stop = (req: Request, res: Response, _next: NextFunction) => {};

const restart = (req: Request, res: Response, _next: NextFunction) => {};


export default {
  scores,
  start,
  stop,
  restart,
};
