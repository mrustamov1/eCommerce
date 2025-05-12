import { Request, Response } from "express";
import { products } from "../data/categories.data.js";

export const CategoriesController = {
  async get(req: Request, res: Response) {
    res.send(products);
  },
};
