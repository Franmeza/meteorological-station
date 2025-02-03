import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const { API_KEY } = process.env;

export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.query.api_key;
  console.log(apiKey);

  if (!apiKey || apiKey !== API_KEY) {
    res.status(403).json({ error: "Forbidden: Invalid or missing API key" });
  }

  next();
};
