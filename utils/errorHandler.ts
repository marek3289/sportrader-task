import { Request, Response, NextFunction } from 'express';

interface ErrorWithStatusCode extends Error {
  statusCode: number;
  status: string;
}

const errorHandler = (err: ErrorWithStatusCode, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.stack, err.status);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Failure';

  let error = { ...err, name: err.name };

  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
};

export default errorHandler;
