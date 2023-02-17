import path from 'path';

import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import hpp from 'hpp';

import createError from 'http-errors';
import errorHandler from './utils/errorHandler';

require('dotenv').config();

export default function initializeServer(router: Router) {
  const app = express();
  const isProduction = process.env.NODE_ENV === 'production';
  const origin = { origin: isProduction ? false : '*' };

  const limiter = rateLimit({ max: 100, windowMs: 60 * 60 * 1000, message: 'Too many request from the same IP' });
  
  app.set('trust proxy', true);
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors(origin));
  app.use(helmet());
  app.use(compression());
  app.use(xss());
  app.use(hpp());

  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/api', limiter)
  app.use('/api', router);

  app.all('*', (req, res, next) => next(createError(404, `Can't find ${req.originalUrl} on this server!`)));
  app.use(errorHandler);

  return app;
}
