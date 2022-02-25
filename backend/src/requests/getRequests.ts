import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.sendFile('/static/pages/index.html');
});

export { router };