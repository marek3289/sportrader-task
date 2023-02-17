import { Request, Response, NextFunction } from 'express';

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
