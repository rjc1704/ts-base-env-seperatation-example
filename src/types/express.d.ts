import { Express } from "express";

declare global {
  namespace Express {
    interface Request {
      // req.auth = user; 이런 코드쓰고싶다!
      valid?: boolean;
    }
  }
}
