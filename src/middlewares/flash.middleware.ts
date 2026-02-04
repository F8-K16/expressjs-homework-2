import { Request, Response, NextFunction } from "express";

export const flashMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.locals.success = req.flash("success")[0];
  res.locals.error = req.flash("error")[0];
  next();
};
