import { Request, Response } from "express";
import { faqData } from "../data/faq.data.js";

export const FaqController = {
  async get(req: Request, res: Response) {
    res.send(faqData);
  },
};
