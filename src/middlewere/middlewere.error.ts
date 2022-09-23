import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import Errors from './errors';

const MidddlewareErrors = async (err: Errors, req: Request, res: Response, _next: NextFunction) => {
  const { code, message } = err;
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues[0].message });
  }
  res.status(code || 500).json({ message });
};

export default MidddlewareErrors;